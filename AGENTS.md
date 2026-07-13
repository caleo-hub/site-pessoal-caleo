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
npm run build
```

## Decisoes iniciais

- Framework: Next.js com App Router e TypeScript.
- Hosting alvo: AWS Amplify Hosting.
- Dominio personalizado: conectar no Amplify depois da compra do dominio.
- Backend futuro: preferir recursos gerenciados/serverless da AWS antes de
  introduzir servidor sempre ligado.
