# Task 404 — Alertas automáticos: vencimento de assinatura

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.2
**Dependências:** task-400, task-305

## Contexto

Quando pagamento falha ou assinatura está prestes a vencer, avisar o cliente por WhatsApp aumenta retenção. Complementa o email (que pode ir para spam).

## Objetivo

Alertas de WhatsApp para problemas de assinatura.

## Critérios de aceitação

- Alerta quando pagamento falha: "Seu pagamento não foi processado. Atualize seus dados para manter o acesso: [link]"
- Alerta 3 dias antes do vencimento (se pagamento pendente): "Sua assinatura vence em 3 dias. Regularize para não perder acesso."
- Alerta quando assinatura é pausada: "Seu acesso foi pausado por falta de pagamento. Reative aqui: [link]"
- Não enviar mais de 1 mensagem por dia sobre o mesmo assunto
- Tracking via `AlertaEnviado`
- Teste: simular falha de pagamento → verificar alerta enviado

## Saída esperada

- `lib/alertas/assinatura.ts`
- Templates de mensagem para cada cenário
- Integração com webhook de assinatura (task-305)
