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
npm run typecheck
npm run lint
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

## Deploy no Amplify Hosting

1. Publique este repositorio no GitHub.
2. No AWS Console, abra AWS Amplify.
3. Crie um app conectado ao repositorio `site-pessoal-caleo`.
4. Use o arquivo `amplify.yml` deste repositorio como build spec.
5. Depois que o dominio for comprado, conecte o dominio personalizado no Amplify.

## Proximos passos

- Trocar textos placeholder por conteudo real.
- Definir dominio final.
- Adicionar foto/imagens reais.
- Criar secoes de projetos, artigos e contato.
- Escolher recursos AWS adicionais se houver backend persistente.
