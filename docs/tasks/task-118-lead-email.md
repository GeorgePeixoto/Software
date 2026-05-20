# Task 118 — Captura de lead: email transacional (Resend + react-email)

**Fase:** 1 — Simulador grátis
**Épico:** 1.7
**Dependências:** task-117

## Contexto

Após capturar o lead, enviamos email com resumo do resultado + cupom para relatório premium. O email é a primeira comunicação com o potencial cliente — precisa ser profissional e útil.

## Objetivo

Template de email transacional com react-email, integração Resend, endpoint de unsubscribe e painel admin de leads.

## Restrições

- Resend como provider (free tier: 100 emails/dia)
- react-email para templates (HTML em React)
- Email enviado em até 1 minuto após captura
- Link de unsubscribe funcional em todo email
- Dados sensíveis nunca em logs

## Critérios de aceitação

- Resend SDK instalado e configurado
- Template react-email em `emails/resultado-simulacao.tsx` com:
  - Saudação com nome da empresa (se informado)
  - Resumo do resultado em 3 bullets (diferença R$/mês, tendência, principal alerta)
  - Link para resultado completo no site
  - CTA para relatório premium com cupom `REFORMA10`
  - Link de unsubscribe no footer
- Server action de captura (task-117) dispara envio do email
- Endpoint `app/api/unsubscribe/route.ts` que marca `unsubscribedEm` no lead
- Painel admin `app/admin/leads/page.tsx`:
  - Lista de leads com: email, data, resultado resumido
  - Protegido por env `ADMIN_PASSWORD` (basic auth ou check simples)
  - Botão de export CSV
- `.env.example` atualizado com `RESEND_API_KEY`
- Página de pós-captura: `app/(public)/obrigado/page.tsx`

## Saída esperada

- `emails/resultado-simulacao.tsx`
- `lib/email.ts` (função de envio)
- `app/api/unsubscribe/route.ts`
- `app/admin/leads/page.tsx`
- `app/(public)/obrigado/page.tsx`
- `.env.example` atualizado
