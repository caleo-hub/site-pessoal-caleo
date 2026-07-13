# AGENTS.md

Responda ao usuario em portugues brasileiro.

Este repositorio e o site pessoal de Caleo e deve ser mantido pronto para AWS
Amplify Hosting.

## AWS

- Profile local padrao: `dev`
- Region: `us-east-1`
- Identidade validada no workspace: `arn:aws:iam::528049652959:user/caleo`

Use comandos AWS assim:

```bash
aws sts get-caller-identity --profile dev
AWS_PROFILE=dev aws sts get-caller-identity
```

Nunca registrar access keys, secret keys, tokens ou arquivos de `/home/caleo/.aws`
no repositorio.

## GitHub

- Repositorio remoto: `caleo-hub/site-pessoal-caleo`
- URL: `https://github.com/caleo-hub/site-pessoal-caleo`
- Branch principal: `main`
- GitHub CLI no WSL: `/home/caleo/.local/bin/gh`
- Conta autenticada no `gh`: `caleo-hub`
- CI/CD: `.github/workflows/ci-cd.yml`

Comandos uteis:

```bash
gh auth status
gh repo view caleo-hub/site-pessoal-caleo
git status --short --branch
git push
```

Nunca registrar tokens do GitHub no repositorio ou em logs. Se `gh` nao aparecer
em uma sessao nao interativa, use `/home/caleo/.local/bin/gh`.

## Desenvolvimento

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run ci
npm run build
```

## Deploy

O deploy alvo e AWS Amplify Hosting. O bootstrap esta em
`scripts/setup-amplify-cicd.sh` e cria/usa:

- app Amplify conectado a `caleo-hub/site-pessoal-caleo`;
- branch Amplify `main`;
- IAM Role para GitHub Actions via OIDC;
- variables do GitHub `AWS_ROLE_TO_ASSUME`, `AWS_REGION` e `AMPLIFY_APP_ID`.

Nao substituir OIDC por access keys persistentes no GitHub sem pedido explicito.

## Decisoes iniciais

- Framework: Next.js com App Router e TypeScript.
- Hosting alvo: AWS Amplify Hosting.
- Dominio personalizado: conectar no Amplify depois da compra do dominio.
- Backend futuro: preferir recursos gerenciados/serverless da AWS antes de
  introduzir servidor sempre ligado.
