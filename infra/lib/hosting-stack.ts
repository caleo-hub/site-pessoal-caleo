import * as fs from "node:fs";
import * as path from "node:path";
import * as amplify from "aws-cdk-lib/aws-amplify";
import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import type { Construct } from "constructs";

const REPOSITORY = "caleo-hub/site-pessoal-caleo";
const BRANCH = "main";

export class HostingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const githubAccessToken = new cdk.CfnParameter(this, "GitHubAccessToken", {
      type: "String",
      noEcho: true,
      description: "One-time GitHub token used by Amplify to connect the repository"
    });

    const buildSpec = fs.readFileSync(
      path.resolve(__dirname, "../../amplify.yml"),
      "utf8"
    );

    const portfolioVideoBucket = new s3.Bucket(this, "PortfolioVideoBucket", {
      bucketName: `caleo-portfolio-videos-${this.account}-${this.region}`,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: true,
        blockPublicPolicy: false,
        ignorePublicAcls: true,
        restrictPublicBuckets: false
      }),
      cors: [
        {
          allowedHeaders: ["*"],
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.HEAD],
          allowedOrigins: ["*"]
        }
      ],
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: true
    });

    portfolioVideoBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        effect: iam.Effect.ALLOW,
        principals: [new iam.AnyPrincipal()],
        resources: [portfolioVideoBucket.arnForObjects("portfolio/*")]
      })
    );

    const app = new amplify.CfnApp(this, "AmplifyApp", {
      name: "site-pessoal-caleo",
      platform: "WEB_COMPUTE",
      repository: `https://github.com/${REPOSITORY}`,
      accessToken: githubAccessToken.valueAsString,
      buildSpec,
      environmentVariables: [
        {
          name: "NEXT_PUBLIC_PORTFOLIO_VIDEO_BASE_URL",
          value: `https://${portfolioVideoBucket.bucketRegionalDomainName}/portfolio`
        }
      ],
      enableBranchAutoDeletion: true
    });

    const branch = new amplify.CfnBranch(this, "MainBranch", {
      appId: app.attrAppId,
      branchName: BRANCH,
      enableAutoBuild: false,
      framework: "Next.js - SSR",
      stage: "PRODUCTION"
    });

    const oidcProvider = new iam.OpenIdConnectProvider(this, "GitHubOidc", {
      url: "https://token.actions.githubusercontent.com",
      clientIds: ["sts.amazonaws.com"],
      thumbprints: ["6938fd4d98bab03faadb97b34396831e3780aea1"]
    });

    const deployRole = new iam.Role(this, "GitHubDeployRole", {
      roleName: "GitHubActionsAmplifyDeploy-site-pessoal-caleo",
      assumedBy: new iam.WebIdentityPrincipal(
        oidcProvider.openIdConnectProviderArn,
        {
          StringEquals: {
            "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
          },
          StringLike: {
            "token.actions.githubusercontent.com:sub": `repo:${REPOSITORY}:ref:refs/heads/${BRANCH}`
          }
        }
      )
    });

    const appArn = cdk.Stack.of(this).formatArn({
      service: "amplify",
      resource: "apps",
      resourceName: app.attrAppId
    });

    deployRole.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          "amplify:GetApp",
          "amplify:GetBranch",
          "amplify:GetJob",
          "amplify:ListJobs",
          "amplify:StartJob"
        ],
        resources: [
          appArn,
          `${appArn}/branches/${BRANCH}`,
          `${appArn}/branches/${BRANCH}/jobs/*`
        ]
      })
    );

    new cdk.CfnOutput(this, "AmplifyAppId", {
      value: app.attrAppId,
      description: "Value for the AMPLIFY_APP_ID GitHub variable"
    });

    new cdk.CfnOutput(this, "GitHubDeployRoleArn", {
      value: deployRole.roleArn,
      description: "Value for the AWS_ROLE_TO_ASSUME GitHub variable"
    });

    new cdk.CfnOutput(this, "DefaultUrl", {
      value: `https://${BRANCH}.${app.attrDefaultDomain}`,
      description: "Temporary Amplify URL"
    });

    new cdk.CfnOutput(this, "PortfolioVideoBucketName", {
      value: portfolioVideoBucket.bucketName
    });

    new cdk.CfnOutput(this, "PortfolioVideoBaseUrl", {
      value: `https://${portfolioVideoBucket.bucketRegionalDomainName}/portfolio`
    });

    branch.addDependency(app);
  }
}

