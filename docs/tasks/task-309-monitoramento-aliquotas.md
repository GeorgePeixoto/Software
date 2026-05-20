# Task 309 — Monitoramento de alíquotas aplicáveis ao tenant

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.5
**Dependências:** task-307, task-102

## Contexto

Alíquotas mudam. O dashboard deve mostrar quais alíquotas se aplicam à empresa do usuário hoje e alertar quando houver mudança. Isso é um dos principais valores do SaaS vs simulação one-shot.

## Objetivo

Página que mostra alíquotas aplicáveis à empresa ativa e sinaliza mudanças recentes.

## Critérios de aceitação

- Rota `/dashboard/aliquotas`
- Mostra: alíquotas atuais aplicáveis (IBS, CBS, ICMS, ISS, PIS, COFINS) baseadas no CNAE e regime da empresa
- Indica fonte legal de cada alíquota
- Destaca alíquotas que mudaram nos últimos 30 dias (badge "Atualizado")
- Mostra próxima mudança prevista (baseado no cronograma de transição)
- Timeline visual: "Hoje você paga X% → Em 2027 pagará Y% → Em 2033 pagará Z%"
- Dados vêm de `/engine/rules/` (build-time) — não precisa de API externa por enquanto

## Saída esperada

- `app/(dashboard)/aliquotas/page.tsx`
- `components/dashboard/tabela-aliquotas.tsx`
- `components/dashboard/timeline-transicao.tsx`
- `lib/aliquotas-aplicaveis.ts` (função que filtra regras por CNAE/regime)
