# Task 311 — Gestão de assinatura

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.7
**Dependências:** task-305

## Contexto

Usuário precisa poder ver status da assinatura, cancelar, ver faturas e atualizar forma de pagamento.

## Objetivo

Página de gestão de assinatura com ações de self-service.

## Critérios de aceitação

- Rota `/dashboard/assinatura`
- Mostra: status atual, próxima cobrança, valor, método de pagamento
- Histórico de faturas (últimos 12 meses) com status (pago, falhou, pendente)
- Botão "Cancelar assinatura" com confirmação e motivo (select com opções)
- Botão "Atualizar pagamento" → redirect para Mercado Pago
- Se cancelada: mostra data de fim do acesso + botão "Reativar"
- Email de confirmação ao cancelar
- Dados de cancelamento salvos (motivo) para analytics

## Saída esperada

- `app/(dashboard)/assinatura/page.tsx`
- `components/dashboard/status-assinatura.tsx`
- `components/dashboard/historico-faturas.tsx`
- `components/dashboard/modal-cancelamento.tsx`
- `lib/assinatura.ts` atualizado (cancelar, reativar)
- `emails/assinatura-cancelada.tsx`
