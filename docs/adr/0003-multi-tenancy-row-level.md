# ADR-0003 — Multi-tenancy via row-level com tenantId

**Status:** aceita
**Data:** 2026-05-19
**Decididores:** dev principal

## Contexto

O CLAUDE.md define "multi-tenancy desde o dia 1" como princípio. O produto terá múltiplas empresas (tenants) usando o mesmo banco. Precisamos decidir a estratégia de isolamento antes de criar qualquer tabela de domínio.

Duas abordagens principais existem:
1. **Row-level**: todas as tabelas têm coluna `tenantId`, queries filtram por tenant
2. **Schema-per-tenant**: cada tenant tem seu próprio schema PostgreSQL

## Decisão

Usar **row-level isolation** com coluna `tenantId` em toda tabela que contém dados de tenant.

## Alternativas consideradas

- **Schema-per-tenant**: isolamento forte, backup/restore por tenant trivial. Rejeitada porque: Prisma não suporta bem schemas dinâmicos, migrações precisam rodar N vezes (uma por schema), complexidade operacional alta para MVP, Neon free tier não suporta múltiplos schemas de forma prática.
- **Database-per-tenant**: isolamento máximo. Rejeitada porque: custo proibitivo no MVP, operacionalmente complexo, overkill para o volume esperado (<1000 tenants no primeiro ano).
- **Row-level com tenantId** (escolhida): simples, Prisma suporta nativamente (middleware ou extension), uma migração serve todos, queries são filtradas por `WHERE tenantId = ?`. Funciona bem até ~10k tenants com índices adequados.

## Consequências

### Positivas
- Simplicidade: uma migração, um schema, um banco
- Prisma middleware pode injetar `tenantId` automaticamente em toda query
- Custo zero adicional de infra
- Funciona perfeitamente com Neon free tier
- Backup/restore do banco inteiro é simples

### Negativas / trade-offs aceitos
- Risco de data leak se esquecer filtro de tenant (mitigado por middleware Prisma)
- Performance pode degradar com muitos tenants na mesma tabela (mitigado por índices compostos `tenantId + ...`)
- Backup/restore de tenant individual requer query de export (não é `pg_dump` direto)
- Toda tabela de domínio precisa ter `tenantId` — disciplina necessária

### O que precisa ser revisitado
- Se o produto atingir >10k tenants com tabelas de milhões de rows, avaliar particionamento por `tenantId` ou migração para schema-per-tenant.
- Se um cliente enterprise exigir isolamento total de dados, considerar schema dedicado como exceção.

## Implementação

- Modelo `Tenant` criado na task-002 como base
- Toda tabela futura com dados de empresa terá `tenantId String` + `@relation` para `Tenant`
- Prisma middleware (ou extension) injeta filtro de tenant em toda query
- Índice composto `@@index([tenantId, ...])` em tabelas com queries frequentes
- Tabelas sem tenant (ex: regras tributárias, configurações globais) não têm a coluna

## Referências

- Prisma multi-tenancy guide: https://www.prisma.io/docs/guides/other/multi-tenancy
- Princípio "multi-tenancy desde o dia 1" em CLAUDE.md, seção 4.3
