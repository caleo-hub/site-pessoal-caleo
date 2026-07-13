# Vídeos do portfólio

O site usa um bucket S3 público apenas para leitura, restrito ao prefixo
`portfolio/`. Enquanto um vídeo não existir ou falhar ao carregar, o card mostra
o fallback **“Vídeo em gravação”**.

## Bucket

`caleo-portfolio-videos-528049652959-us-east-1`

## Arquivos esperados

| Projeto | Chave S3 |
| --- | --- |
| Enterprise RAG Assistant | `portfolio/enterprise-rag-assistant/demo.mp4` |
| Hybrid Service Desk Agent | `portfolio/hybrid-service-desk-agent/demo.mp4` |
| Voice Field Service Copilot | `portfolio/voice-field-service-copilot/demo.mp4` |

Use MP4 (H.264/AAC) para melhor compatibilidade nos navegadores. Para enviar:

```bash
/home/caleo/.local/bin/aws s3 cp ./demo.mp4 \
  s3://caleo-portfolio-videos-528049652959-us-east-1/portfolio/enterprise-rag-assistant/demo.mp4 \
  --content-type video/mp4 \
  --profile dev
```

Repita o comando trocando a chave pelo projeto correspondente. O deploy do site
usa automaticamente a URL pública desse bucket.

