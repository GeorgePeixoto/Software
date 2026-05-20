# Task 505 — Otimização de performance

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.5
**Dependências:** task-120

## Contexto

Com usuários reais, identificamos gargalos. Esta task é um passe de otimização: bundle size, queries lentas, cache, lazy loading.

## Objetivo

Melhorar performance geral do app para manter Lighthouse ≥ 90 e TTI < 2s com dados reais.

## Critérios de aceitação

- Análise de bundle com `@next/bundle-analyzer`: identificar e reduzir chunks > 100KB
- Lazy loading de componentes pesados (Recharts, combobox de CNAE)
- Cache de resultados de simulação (ISR ou cache header para rotas de resultado)
- Otimização de queries Prisma: adicionar índices onde necessário, usar `select` em vez de `include` completo
- Imagens otimizadas: todas via `next/image`, formatos modernos (WebP/AVIF)
- Prefetch de rotas prováveis (link prefetch no Next.js)
- Lighthouse em produção: Performance ≥ 95 mobile
- Core Web Vitals: LCP < 2s, CLS < 0.05, INP < 150ms

## Saída esperada

- `next.config.ts` atualizado (bundle analyzer, headers de cache)
- Queries otimizadas (índices, selects)
- Componentes com `dynamic()` para lazy loading
- Relatório de antes/depois (Lighthouse scores)
