# Task 201 — Integração Mercado Pago: checkout cartão + webhook unificado

**Fase:** 2 — Relatório Premium
**Épico:** 2.1
**Dependências:** task-200

## Contexto

Além de Pix, precisamos aceitar cartão de crédito/débito. O webhook já existe (task-200) — aqui estendemos para tratar pagamentos por cartão e unificamos o fluxo.

## Objetivo

Checkout por cartão integrado ao Mercado Pago, com formulário tokenizado (Brick ou SDK JS) e tratamento de status no webhook.

## Restrições

- Usar Checkout Bricks ou SDK JS do Mercado Pago (tokenização client-side, sem PCI)
- Tratar status: approved, pending, rejected, in_process
- Não armazenar dados de cartão — apenas token e últimos 4 dígitos
- Retry automático no webhook se falhar processamento

## Critérios de aceitação

- Formulário de cartão tokenizado na página de checkout
- Função `criarPagamentoCartao(token, valor, parcelas, email)` em `lib/mercadopago.ts`
- Suporte a parcelamento (até 3x sem juros para R$ 47)
- Webhook trata status de cartão (approved, rejected, pending)
- Página de checkout unificada: abas Pix / Cartão
- Feedback visual de status: aprovado → redirect para download, rejeitado → mensagem de erro
- Teste em sandbox com cartões de teste do Mercado Pago

## Saída esperada

- `components/checkout/form-cartao.tsx`
- `components/checkout/checkout-tabs.tsx`
- `lib/mercadopago.ts` atualizado
- `app/api/pagamento/webhook/route.ts` atualizado
