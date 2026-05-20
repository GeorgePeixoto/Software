# Task 205 — Envio do PDF por email após pagamento

**Fase:** 2 — Relatório Premium
**Épico:** 2.2
**Dependências:** task-204, task-202

## Contexto

Fluxo completo: pagamento confirmado → gerar PDF → enviar por email → atualizar status. Tudo deve acontecer em até 2 minutos após confirmação.

## Objetivo

Pipeline automático que, ao receber confirmação de pagamento via webhook, gera o PDF e envia por email.

## Restrições

- Tempo total (webhook → email entregue): < 2 minutos
- PDF gerado e armazenado (URL temporária para download posterior)
- Se geração falhar, retry até 3 vezes com backoff
- Email com PDF em anexo (< 5MB) + link de download alternativo
- Armazenamento do PDF: Vercel Blob ou upload para S3/R2

## Critérios de aceitação

- Webhook de pagamento aprovado dispara geração do PDF
- PDF gerado e salvo em storage (URL persistida no modelo `Pagamento.pdfUrl`)
- Email enviado via Resend com:
  - PDF em anexo
  - Link de download (expira em 7 dias)
  - Mensagem de agradecimento
  - CTA para o painel SaaS (R$ 149/mês)
- `Pagamento.pdfGeradoEm` atualizado após geração
- Se geração falhar: log de erro, retry, email de fallback ("estamos gerando seu relatório, enviaremos em breve")
- Teste end-to-end: simular webhook → verificar PDF gerado → verificar email enviado

## Saída esperada

- `lib/pdf/pipeline.ts` (orquestração: gerar + salvar + enviar)
- `lib/storage.ts` (upload/download de PDF)
- `emails/relatorio-pronto.tsx` (template do email)
- Webhook atualizado para chamar pipeline
- `.env.example` com variáveis de storage
