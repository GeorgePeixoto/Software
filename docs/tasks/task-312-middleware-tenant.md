# Task 312 — Middleware Prisma de tenant

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.7
**Dependências:** task-302

## Contexto

Com multi-tenancy row-level (ADR-0003), toda query no dashboard precisa filtrar por `tenantId`. Fazer isso manualmente em cada query é error-prone. Um middleware Prisma injeta o filtro automaticamente.

## Objetivo

Middleware (ou Prisma Client Extension) que injeta `tenantId` em toda query de tabelas multi-tenant.

## Restrições

- Usar Prisma Client Extension (preferido sobre middleware deprecated)
- Tenant ID vem do contexto de autenticação (Clerk user → tenant)
- Tabelas sem tenant (regras, configurações globais) não são filtradas
- Deve ser impossível acessar dados de outro tenant acidentalmente

## Critérios de aceitação

- Prisma Client Extension criado em `lib/db.ts`
- Toda query em tabelas com `tenantId` recebe filtro automático
- `create` em tabelas multi-tenant injeta `tenantId` automaticamente
- Função `getPrismaForTenant(tenantId)` retorna client com filtro ativo
- Teste: criar dados com tenant A, buscar com tenant B → não encontra
- Teste: criar sem informar tenantId → injeta automaticamente
- Documentação em `lib/db.ts` sobre como usar

## Saída esperada

- `lib/db.ts` (Prisma client com extension de tenant)
- `lib/tenant-context.ts` (extrair tenantId do request/auth)
- Testes de isolamento
