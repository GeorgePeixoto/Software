# Task 209 — Dashboard interno de conversão (admin)

**Fase:** 2 — Relatório Premium
**Épico:** 2.5
**Dependências:** task-202, task-118

## Contexto

Precisamos acompanhar métricas de conversão: quantas simulações viram leads, quantos leads compram o relatório, receita total, ticket médio. Dashboard interno para o dono do produto.

## Objetivo

Painel admin com métricas de funil e conversão.

## Restrições

- Protegido por `ADMIN_PASSWORD` (mesmo mecanismo da task-118)
- Dados em tempo real (query no banco, sem cache complexo)
- Não precisa ser bonito — precisa ser útil

## Critérios de aceitação

- Rota `app/admin/dashboard/page.tsx`
- Métricas exibidas:
  - Total de simulações (hoje, 7d, 30d, total)
  - Total de leads capturados (hoje, 7d, 30d, total)
  - Taxa de conversão simulação → lead
  - Total de pagamentos aprovados (hoje, 7d, 30d, total)
  - Taxa de conversão lead → compra
  - Receita total e ticket médio
  - Top 5 CNAEs simulados
  - Top 5 UFs
- Filtro por período (últimos 7d, 30d, 90d, total)
- Export CSV das métricas

## Saída esperada

- `app/admin/dashboard/page.tsx`
- `lib/admin/metricas.ts` (queries agregadas)
- Componentes de cards de métrica reutilizáveis
