# AGENTS.md

Contexto operacional para agentes trabalhando no repo `site-pessoal-caleo`.

Responda ao usuario em portugues brasileiro.

## Projeto

- Nome do repo local: `site-pessoal-caleo`
- Caminho WSL: `/home/caleo/dev/site-pessoal-caleo`
- Repositorio GitHub: `caleo-hub/site-pessoal-caleo`
- URL: `https://github.com/caleo-hub/site-pessoal-caleo`
- Branch principal: `main`
- Visibilidade: publico
- Hosting alvo: AWS Amplify Hosting
- Framework: Next.js com App Router e TypeScript

Este site e o site pessoal de Caleo. A base atual ainda tem conteudo placeholder
e deve evoluir com textos, foto, projetos, artigos, contato e dominio
personalizado.

## GitHub

GitHub CLI no WSL:

```bash
/home/caleo/.local/bin/gh
```

Conta autenticada no `gh`:

```text
caleo-hub
```

Configuracao Git local desejada para commits deste repo:

```ini
[user]
    name = caleo-hub
    email = caleomenesessantos@gmail.com
```

Comandos uteis:

```bash
gh auth status
gh repo view caleo-hub/site-pessoal-caleo
git status --short --branch
git push
```

Se `gh` nao aparecer em uma sessao nao interativa, use o caminho completo:

```bash
/home/caleo/.local/bin/gh
```

Nunca registrar tokens do GitHub no repositorio, em logs ou em mensagens.

## AWS

AWS CLI no WSL:

```bash
/home/caleo/.local/bin/aws
```

Perfil AWS local:

```text
dev
```

Configuracao validada:

- Region: `us-east-1`
- Output: `json`
- Conta AWS: `528049652959`
- Identidade validada: `arn:aws:iam::528049652959:user/caleo`

Comandos uteis:

```bash
aws sts get-caller-identity --profile dev
AWS_PROFILE=dev aws sts get-caller-identity
export AWS_PROFILE=dev
```

Nunca registrar access keys, secret keys, tokens ou arquivos de `/home/caleo/.aws`
no repositorio.

## CI/CD

Workflow GitHub Actions:

```text
.github/workflows/ci-cd.yml
```

O CI roda em pull requests e pushes para `main`:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Script agregado:

```bash
npm run ci
```

O deploy esta preparado para AWS Amplify Hosting usando OIDC do GitHub Actions,
sem guardar AWS access key no GitHub. O job de deploy so roda quando estas
variables existirem no repo GitHub:

- `AWS_ROLE_TO_ASSUME`
- `AWS_REGION`
- `AMPLIFY_APP_ID`

Infraestrutura CDK para criar o app Amplify, branch `main` e IAM Role OIDC:

```bash
cd infra
npm ci
npx cdk bootstrap --profile dev
npx cdk deploy --profile dev \
  --parameters GitHubAccessToken="$(gh auth token)" \
  --outputs-file cdk-outputs.json
```

Depois do deploy, configurar as variables do GitHub com os outputs da stack:

```bash
gh variable set AWS_ROLE_TO_ASSUME --body "<GitHubDeployRoleArn>"
gh variable set AWS_REGION --body "us-east-1"
gh variable set AMPLIFY_APP_ID --body "<AmplifyAppId>"
```

O token do GitHub entra como parametro CloudFormation `NoEcho`; nunca registrar
o token em codigo, arquivo de outputs, logs ou mensagens. Nao substituir OIDC por
access keys persistentes no GitHub sem pedido explicito.

## Desenvolvimento Local

Instalar dependencias:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Se a porta `3000` estiver ocupada, usar outra porta:

```bash
npm run dev -- --port 3010
```

Validar:

```bash
npm run ci
npm run typecheck
npm run lint
npm test
npm run build
```

## Arquivos Importantes

- `amplify.yml` - build spec usado pelo AWS Amplify.
- `.github/workflows/ci-cd.yml` - CI e deploy para Amplify.
- `infra/` - stack CDK do Amplify Hosting e GitHub OIDC.
- `tests/project.test.mjs` - testes basicos do projeto e build spec.
- `src/app/page.tsx` - pagina inicial placeholder.
- `src/app/globals.css` - estilos globais.

## O Que Ja Foi Feito

- Criado repo local em `/home/caleo/dev/site-pessoal-caleo`.
- Criado repo GitHub publico `caleo-hub/site-pessoal-caleo`.
- Publicado branch `main`.
- Criada base Next.js + TypeScript.
- Criado `amplify.yml` para AWS Amplify Hosting.
- Criado CI com typecheck, lint, testes e build.
- Criado CD preparado para disparar deploy no Amplify via GitHub Actions + OIDC.
- Criada stack CDK em `infra/` para provisionar Amplify e IAM.
- Configurado Git local do repo para `caleo-hub <caleomenesessantos@gmail.com>`.

## Estado Atual Importante

O deploy da stack CDK ainda precisa ser executado:

```bash
cd infra
npx cdk deploy --profile dev \
  --parameters GitHubAccessToken="$(gh auth token)"
```

Enquanto ele nao rodar, o CI funciona, mas o job de deploy fica pulado porque as
variables do Amplify ainda nao existem no GitHub.

Durante a ultima sessao, novas chamadas ao WSL ficaram travando. Evite reiniciar
a distro sem confirmar com o usuario, pois ha servicos de outros projetos
rodando no WSL.
