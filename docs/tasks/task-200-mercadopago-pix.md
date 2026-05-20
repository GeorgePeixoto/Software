# Task 200 — Integração Mercado Pago: setup + checkout Pix

**Fase:** 2 — Relatório Premium
**Épico:** 2.1
**Dependências:** task-120

## Contexto

O relatório premium custa R$ 47 (one-shot). Mercado Pago é o gateway escolhido — dominante no Brasil, suporta Pix (preferido pelo público-alvo) e cartão. Esta task configura a integração base e o checkout via Pix.

## Objetivo

Integração Mercado Pago funcional com checkout Pix: usuário clica "Comprar relatório", gera QR code Pix, paga, webhook confirma.

## Restrições

- SDK oficial do Mercado Pago (`mercadopago` npm)
- Credenciais em variáveis de ambiente
- Idempotência: webhook pode chegar mais de uma vez — tratar
- Pix com expiração de 30 minutos
- Ambiente sandbox para desenvolvimento

## Critérios de aceitação

- SDK Mercado Pago instalado e configurado
- Função `criarPagamentoPix(valor, descricao, email)` em `lib/mercadopago.ts`
- Rota de criação de pagamento: `app/api/pagamento/criar/route.ts`
- Retorna QR code (base64) + código copia-e-cola + ID do pagamento
- Página de checkout com QR code renderizado + instruções
- Webhook `app/api/pagamento/webhook/route.ts` recebe notificação de pagamento
- Webhook valida assinatura do Mercado Pago
- Webhook é idempotente (processar mesmo pagamento 2x não duplica efeito)
- `.env.example` com `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET`
- Funciona em sandbox (teste com credenciais de teste)

## Saída esperada

- `lib/mercadopago.ts`
- `app/api/pagamento/criar/route.ts`
- `app/api/pagamento/webhook/route.ts`
- `app/(public)/checkout/page.tsx` (tela com QR code)
- `.env.example` atualizado
- `docs/integracao-mercadopago.md` (fluxo, webhooks, como testar)
