# ADR-0001 — pnpm como package manager

**Status:** aceita
**Data:** 2026-05-19
**Decididores:** dev principal

## Contexto

O projeto precisa de um package manager consistente desde o início. Múltiplas opções existem (npm, pnpm, yarn, bun). A escolha afeta velocidade de CI, determinismo de lockfile, uso de disco e compatibilidade com monorepo futuro.

## Decisão

Usar **pnpm** como package manager único do projeto.

## Alternativas consideradas

- **npm**: padrão do Node.js, zero setup. Rejeitada porque: lockfile menos determinístico, node_modules flat causa phantom dependencies, mais lento em CI.
- **yarn (v4/berry)**: bom, mas PnP causa incompatibilidades com algumas libs. Complexidade desnecessária para o MVP.
- **bun**: muito rápido, mas runtime ainda não é 100% compatível com o ecossistema Next.js/Prisma em produção. Risco desnecessário.
- **pnpm** (escolhida): lockfile determinístico, node_modules isolado (sem phantom deps), ~2x mais rápido que npm, suporte nativo a workspaces se virar monorepo, adotado por Vercel/Turborepo.

## Consequências

### Positivas
- CI mais rápido (~40% vs npm em projetos médios)
- Sem phantom dependencies — se não está no package.json, não importa
- Lockfile (`pnpm-lock.yaml`) mais confiável para reprodutibilidade
- Migração para monorepo (se necessário) é trivial com pnpm workspaces

### Negativas / trade-offs aceitos
- Devs precisam instalar pnpm (`corepack enable` resolve)
- Alguns tutoriais/docs assumem npm — adaptar mentalmente
- Vercel detecta pnpm automaticamente, mas precisa de `packageManager` field no package.json

### O que precisa ser revisitado
- Se o projeto migrar para Bun runtime no futuro, reavaliar package manager.

## Referências

- https://pnpm.io/motivation
- https://vercel.com/docs/deployments/configure-a-build#package-manager
