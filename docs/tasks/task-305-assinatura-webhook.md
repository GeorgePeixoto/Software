# Task 305 — Assinatura recorrente: webhook + status + retry

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.3
**Dependências:** task-304

## Contexto

Mercado Pago envia webhooks sobre mudanças na assinatura: pagamento aprovado, falha, cancelamento. Precisamos processar esses eventos e manter o status atualizado.

## Objetivo

Webhook que processa eventos de assinatura e atualiza status no banco.

## Restrições

- Webhook idempotente
- Validar assinatura do webhook (header x-signature)
- Tratar eventos: payment.created, payment.updated, preapproval.updated
- Se pagamento falhar: marcar assinatura como "pendente", enviar email de aviso
- Se 3 falhas consecutivas: pausar acesso ao dashboard (mas não deletar dados)

## Critérios de aceitação

- Webhook `app/api/assinatura/webhook/route.ts`
- Eventos tratados: pagamento aprovado → status "ativa"; falha → status "pendente"; cancelamento → status "cancelada"
- Email de aviso quando pagamento falha (template react-email)
- Middleware no dashboard: se assinatura não ativa, mostrar banner "Sua assinatura está pendente" + link para regularizar
- Log estruturado de cada evento processado (sem dados sensíveis)
- Teste: simular webhook de falha → verificar status atualizado

## Saída esperada

- `app/api/assinatura/webhook/route.ts`
- `lib/assinatura.ts` atualizado (funções de status)
- `emails/assinatura-falha.tsx`
- `components/dashboard/banner-assinatura.tsx`
