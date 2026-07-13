#!/usr/bin/env bash
set -euo pipefail

repo_full_name="${REPO_FULL_NAME:-caleo-hub/site-pessoal-caleo}"
app_name="${AMPLIFY_APP_NAME:-site-pessoal-caleo}"
branch_name="${AMPLIFY_BRANCH:-main}"
aws_profile="${AWS_PROFILE:-dev}"
aws_region="${AWS_REGION:-us-east-1}"
role_name="${AWS_ROLE_NAME:-GitHubActionsAmplifyDeploy-site-pessoal-caleo}"
github_oidc_url="https://token.actions.githubusercontent.com"
github_oidc_thumbprint="6938fd4d98bab03faadb97b34396831e3780aea1"

aws_cli="${AWS_CLI:-/home/caleo/.local/bin/aws}"
gh_cli="${GH_CLI:-/home/caleo/.local/bin/gh}"

repo_url="https://github.com/${repo_full_name}"
account_id="$("$aws_cli" sts get-caller-identity --profile "$aws_profile" --query Account --output text)"
oidc_provider_arn="arn:aws:iam::${account_id}:oidc-provider/token.actions.githubusercontent.com"

echo "Using AWS account ${account_id}, region ${aws_region}, repo ${repo_full_name}"

if ! "$aws_cli" iam get-open-id-connect-provider \
  --profile "$aws_profile" \
  --open-id-connect-provider-arn "$oidc_provider_arn" >/dev/null 2>&1; then
  "$aws_cli" iam create-open-id-connect-provider \
    --profile "$aws_profile" \
    --url "$github_oidc_url" \
    --client-id-list sts.amazonaws.com \
    --thumbprint-list "$github_oidc_thumbprint" >/dev/null
  echo "Created GitHub OIDC provider."
else
  echo "GitHub OIDC provider already exists."
fi

app_id="$("$aws_cli" amplify list-apps \
  --profile "$aws_profile" \
  --region "$aws_region" \
  --query "apps[?name=='${app_name}'].appId | [0]" \
  --output text)"

if [[ "$app_id" == "None" || -z "$app_id" ]]; then
  github_token="$("$gh_cli" auth token)"
  app_id="$("$aws_cli" amplify create-app \
    --profile "$aws_profile" \
    --region "$aws_region" \
    --name "$app_name" \
    --repository "$repo_url" \
    --platform WEB_COMPUTE \
    --access-token "$github_token" \
    --build-spec file://amplify.yml \
    --enable-branch-auto-build \
    --query 'app.appId' \
    --output text)"
  unset github_token
  echo "Created Amplify app ${app_id}."
else
  echo "Amplify app already exists: ${app_id}."
fi

if ! "$aws_cli" amplify get-branch \
  --profile "$aws_profile" \
  --region "$aws_region" \
  --app-id "$app_id" \
  --branch-name "$branch_name" >/dev/null 2>&1; then
  "$aws_cli" amplify create-branch \
    --profile "$aws_profile" \
    --region "$aws_region" \
    --app-id "$app_id" \
    --branch-name "$branch_name" \
    --framework "Next.js - SSR" \
    --stage PRODUCTION \
    --enable-auto-build >/dev/null
  echo "Created Amplify branch ${branch_name}."
else
  echo "Amplify branch ${branch_name} already exists."
fi

trust_policy="$(mktemp)"
permissions_policy="$(mktemp)"
trap 'rm -f "$trust_policy" "$permissions_policy"' EXIT

cat > "$trust_policy" <<JSON
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "${oidc_provider_arn}"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:${repo_full_name}:ref:refs/heads/${branch_name}"
        }
      }
    }
  ]
}
JSON

if ! "$aws_cli" iam get-role \
  --profile "$aws_profile" \
  --role-name "$role_name" >/dev/null 2>&1; then
  role_arn="$("$aws_cli" iam create-role \
    --profile "$aws_profile" \
    --role-name "$role_name" \
    --assume-role-policy-document "file://${trust_policy}" \
    --query 'Role.Arn' \
    --output text)"
  echo "Created IAM role ${role_arn}."
else
  role_arn="$("$aws_cli" iam get-role \
    --profile "$aws_profile" \
    --role-name "$role_name" \
    --query 'Role.Arn' \
    --output text)"
  "$aws_cli" iam update-assume-role-policy \
    --profile "$aws_profile" \
    --role-name "$role_name" \
    --policy-document "file://${trust_policy}"
  echo "Updated IAM role trust policy ${role_arn}."
fi

cat > "$permissions_policy" <<JSON
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "amplify:GetApp",
        "amplify:GetBranch",
        "amplify:GetJob",
        "amplify:ListJobs",
        "amplify:StartJob"
      ],
      "Resource": [
        "arn:aws:amplify:${aws_region}:${account_id}:apps/${app_id}",
        "arn:aws:amplify:${aws_region}:${account_id}:apps/${app_id}/branches/${branch_name}",
        "arn:aws:amplify:${aws_region}:${account_id}:apps/${app_id}/branches/${branch_name}/jobs/*"
      ]
    }
  ]
}
JSON

"$aws_cli" iam put-role-policy \
  --profile "$aws_profile" \
  --role-name "$role_name" \
  --policy-name AmplifyDeploy \
  --policy-document "file://${permissions_policy}"

"$gh_cli" variable set AWS_ROLE_TO_ASSUME --repo "$repo_full_name" --body "$role_arn"
"$gh_cli" variable set AWS_REGION --repo "$repo_full_name" --body "$aws_region"
"$gh_cli" variable set AMPLIFY_APP_ID --repo "$repo_full_name" --body "$app_id"

echo "Configured GitHub repository variables."
echo "AMPLIFY_APP_ID=${app_id}"
echo "AWS_ROLE_TO_ASSUME=${role_arn}"
