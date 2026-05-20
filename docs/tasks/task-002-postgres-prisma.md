# Task 002 — Banco PostgreSQL + Prisma

**Fase:** 0 — Setup e fundação
**Épico:** 0.2
**Dependências:** task-001

## Contexto

Precisamos persistir leads, simulações, usuários e empresas. PostgreSQL é o banco escolhido, Prisma é o ORM. Esta task estabelece a fundação de persistência com multi-tenancy desde o dia 1 (princípio do CLAUDE.md).

## Objetivo

PostgreSQL rodando localmente via Docker, Prisma configurado e conectado, migração inicial com modelo `Tenant` (base para multi-tenancy row-level, ADR-0003). Comandos básicos do Prisma funcionando: `migrate dev`, `studio`, `generate`.

## Restrições

- PostgreSQL versão 15+
- Prisma é o ORM. Não usar Drizzle, TypeORM, raw SQL como primário.
- Conexão configurada via variável de ambiente `DATABASE_URL`
- `.env.example` deve existir com a estrutura esperada (sem valores reais)
- `.env` deve estar no `.gitignore`
- docker-compose.yml obrigatório para o banco local

## Critérios de aceitação

- `docker compose up -d` sobe o PostgreSQL local
- `pnpm prisma migrate dev` cria o banco e aplica a primeira migração
- `pnpm prisma generate` produz o client tipado
- Modelo `Tenant` criado com campos: `id` (UUID), `nome`, `criadoEm`, `atualizadoEm`
- Uma rota simples (`/api/health`) consegue ler do banco e retornar status 200
- Variáveis de ambiente documentadas no `.env.example`
- Script `db:reset` no package.json (`prisma migrate reset --force`)
- Seed script básico (`prisma/seed.ts`) com um tenant de teste
- Extensão `uuid-ossp` ou `pgcrypto` habilitada no PostgreSQL para geração de UUIDs

## Considere

- O modelo `Tenant` é a base para multi-tenancy row-level (ADR-0003). Toda tabela futura terá `tenantId` como FK. Não precisa implementar o middleware de tenant agora, mas o modelo precisa existir.
- Avalie se vale já criar um `prisma/schema.prisma` com generator configurado para output em `node_modules/.prisma/client` (padrão) ou em path customizado.
- Considere adicionar `prisma studio` como script no package.json para facilitar debug visual.
- O nome do banco sugerido: `reforma_tributaria_dev` (local) e `reforma_tributaria` (produção).
