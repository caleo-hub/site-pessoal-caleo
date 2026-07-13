# site-pessoal-caleo

Site pessoal de Caleo, preparado para deploy gerenciado na AWS com Amplify Hosting.

## Stack inicial

- Next.js com App Router
- TypeScript
- AWS Amplify Hosting para deploy
- Route 53 para dominio personalizado quando o dominio for comprado
- Perfil AWS local: `dev`

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validacao

```bash
npm run ci
npm run typecheck
npm run lint
npm test
npm run build
```

## AWS

O workspace WSL ja possui AWS CLI configurado com o perfil `dev`.

```bash
aws sts get-caller-identity --profile dev
export AWS_PROFILE=dev
```

Nao coloque credenciais AWS no repositorio. Use variaveis de ambiente do Amplify
para segredos de producao.

## CI/CD

O repositorio usa GitHub Actions em `.github/workflows/ci-cd.yml`.

- Pull requests para `main`: rodam typecheck, lint, testes e build.
- Push em `main`: roda o mesmo CI e, se passar, dispara deploy no AWS Amplify.
- Deploy usa OIDC do GitHub para assumir uma IAM Role na AWS, sem salvar access
  key no GitHub.

Para provisionar o app Amplify e a IAM Role por infraestrutura como código:

```bash
cd infra
npm ci
npm run build
npx cdk bootstrap --profile dev
npx cdk deploy --profile dev \
  --parameters GitHubAccessToken="$(gh auth token)" \
  --outputs-file cdk-outputs.json
```

O token é recebido por um parâmetro CloudFormation `NoEcho`, usado somente para
conectar o repositório ao Amplify e não deve ser salvo em arquivo ou commitado.

Depois do deploy, use os outputs da stack para configurar no GitHub:

```bash
gh variable set AWS_ROLE_TO_ASSUME --body "<GitHubDeployRoleArn>"
gh variable set AWS_REGION --body "us-east-1"
gh variable set AMPLIFY_APP_ID --body "<AmplifyAppId>"
```

Variables esperadas no GitHub depois do setup:

- `AWS_ROLE_TO_ASSUME`
- `AWS_REGION`
- `AMPLIFY_APP_ID`

## Deploy no Amplify Hosting

O arquivo `amplify.yml` define o build spec usado pelo Amplify.
Depois que o dominio for comprado, conecte o dominio personalizado no app do
Amplify.

## Proximos passos

- Trocar textos placeholder por conteudo real.
- Definir dominio final.
- Adicionar foto/imagens reais.
- Criar secoes de projetos, artigos e contato.
- Escolher recursos AWS adicionais se houver backend persistente.
