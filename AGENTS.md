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
