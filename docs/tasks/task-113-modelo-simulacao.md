# Task 113 — Modelo Prisma SimulacaoResultado + migração

**Fase:** 1 — Engine + Simulador
**Épico:** 1.6
**Dependências:** task-002

## Contexto

O resultado de cada simulação precisa ser persistido para: (1) gerar URL compartilhável, (2) vincular ao lead quando capturado, (3) analytics de uso. Esta task cria apenas o modelo e a migração — a UI vem depois.

## Objetivo

Modelo Prisma para armazenar resultados de simulação com ID público curto para URLs.

## Restrições

- ID público via nanoid (10 chars, URL-safe)
- Input e resultado armazenados como JSON (campos `Json` do Prisma)
- Não depende de autenticação (simulação é anônima)
- Índice único em `publicId`

## Modelo

```prisma
model SimulacaoResultado {
  id        String   @id @default(cuid())
  publicId  String   @unique
  input     Json
  resultado Json
  criadoEm  DateTime @default(now())
  leads     Lead[]
}
```

## Critérios de aceitação

- Modelo criado no `prisma/schema.prisma`
- Migração aplicada com `pnpm prisma migrate dev`
- `pnpm prisma generate` gera client atualizado
- nanoid instalado como dependência
- Função utilitária `gerarPublicId()` em `lib/ids.ts` que gera nanoid de 10 chars
- Teste que verifica: criar resultado, buscar por publicId, resultado encontrado

## Saída esperada

- `prisma/schema.prisma` atualizado
- Migração em `prisma/migrations/`
- `lib/ids.ts`
- Teste de integração (pode usar Prisma com banco de teste)
