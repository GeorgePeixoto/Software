# Task 504 — Métricas de produto (funil, retenção, churn)

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.5
**Dependências:** task-209, task-305

## Contexto

Para crescer, precisamos medir: onde os usuários abandonam, quanto tempo ficam, por que cancelam. Métricas internas complementam o Plausible (que mede tráfego, não produto).

## Objetivo

Dashboard interno de métricas de produto com funil, cohorts e churn.

## Critérios de aceitação

- Rota `app/admin/metricas/page.tsx`
- Funil completo: visita → simulação → lead → compra relatório → signup SaaS → assinatura ativa
- Taxa de conversão entre cada etapa
- Cohort mensal: quantos usuários de cada mês ainda estão ativos
- Churn rate: % de cancelamentos por mês
- MRR (Monthly Recurring Revenue): receita recorrente atual
- LTV estimado: MRR / churn rate
- Gráficos de tendência (últimos 6 meses)
- Export CSV de cada métrica

## Saída esperada

- `app/admin/metricas/page.tsx`
- `lib/admin/metricas-produto.ts` (queries)
- `components/admin/grafico-funil.tsx`
- `components/admin/grafico-cohort.tsx`
- `components/admin/card-mrr.tsx`
