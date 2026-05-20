# Task 207 — Página de upsell pós-simulação

**Fase:** 2 — Relatório Premium
**Épico:** 2.4
**Dependências:** task-115, task-200

## Contexto

Após ver o resultado grátis, o usuário vê um CTA para o relatório premium. Precisamos de uma página dedicada que explique o valor do relatório e leve ao checkout.

## Objetivo

Página de venda do relatório premium com argumentos de valor, preview do conteúdo e botão de compra.

## Restrições

- Acessível via `/relatorio-premium` ou link do CTA no resultado
- Recebe `resultadoId` como param (para vincular compra ao resultado)
- Mobile-first
- Sem login necessário

## Critérios de aceitação

- Página `/relatorio-premium` com:
  - Headline de valor ("Saiba exatamente quanto sua empresa vai pagar até 2033")
  - Lista do que contém o relatório (9 seções)
  - Preview visual (mockup do PDF ou seções-chave)
  - Preço: R$ 47 (com cupom: R$ 37)
  - Botão "Comprar agora" → leva ao checkout
  - FAQ específico do relatório (3-4 perguntas)
  - Garantia: "Se não for útil, devolvemos em 7 dias"
- Se vier de um resultado específico, mostrar preview personalizado ("Para sua empresa, o impacto é de R$ X/mês")
- Disclaimer fiscal presente

## Saída esperada

- `app/(public)/relatorio-premium/page.tsx`
- `components/upsell/` (hero, beneficios, preview, faq, cta)
