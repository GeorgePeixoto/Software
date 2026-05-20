# Task 307 — Dashboard: visão geral

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.4
**Dependências:** task-306, task-302

## Contexto

Página principal do dashboard. Mostra resumo da situação tributária da empresa ativa: carga atual, projeção, alertas e ações rápidas.

## Objetivo

Página de visão geral com cards de métricas, gráfico resumido e alertas.

## Critérios de aceitação

- Rota `/dashboard` (página principal)
- Cards: carga tributária atual (R$/mês), projeção 2027 (R$/mês), diferença (%), regime atual
- Gráfico Recharts mini: projeção 2026→2033 (versão compacta do simulador)
- Lista de alertas/avisos relevantes (ex: "Alíquota de referência pode mudar em breve")
- Ações rápidas: "Re-simular", "Ver relatório completo", "Atualizar dados"
- Dados carregados via server component (query no banco)
- Loading skeleton enquanto carrega

## Saída esperada

- `app/(dashboard)/page.tsx`
- `components/dashboard/card-metrica.tsx`
- `components/dashboard/grafico-resumo.tsx`
- `components/dashboard/lista-alertas.tsx`
