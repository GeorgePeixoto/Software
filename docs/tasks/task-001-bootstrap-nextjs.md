# Task 001 — Bootstrap da aplicação Next.js

**Fase:** 0 — Setup e fundação
**Épico:** 0.1
**Dependências:** task-000

## Contexto

Este é o primeiro commit funcional do projeto. Precisamos de uma aplicação Next.js base, configurada com as escolhas técnicas já definidas no CLAUDE.md, e uma página inicial placeholder que prove que tudo está conectado.

## Objetivo

Aplicação Next.js iniciada, rodando localmente, com TypeScript, Tailwind, shadcn/ui e Vitest prontos para uso. Uma página inicial mínima renderiza, mostrando o nome do projeto e uma frase descritiva.

## Restrições

- Next.js versão 15, com App Router (não Pages Router)
- TypeScript obrigatório, modo estrito (`strict: true`)
- Tailwind CSS v4 configurado
- shadcn/ui v2 inicializado (não precisa instalar componentes ainda, só o setup)
- pnpm como package manager (decisão registrada em ADR-0001)
- Node.js 20 LTS como versão mínima
- Vitest configurado como framework de teste
- Sem internacionalização — projeto é pt-BR puro
- Não criar páginas além da home neste momento

## Critérios de aceitação

- `pnpm install` roda sem erros
- `pnpm dev` sobe a aplicação
- A página `/` renderiza algo identificável (nome do projeto + tagline)
- `pnpm lint` e `pnpm typecheck` passam sem erros
- `pnpm test` roda Vitest (mesmo sem testes reais ainda — config funcional)
- `tsconfig.json` com `strict: true` e paths `@/*` → `./src/*` ou `./*` configurados
- `.nvmrc` com `20` (ou `engines` no package.json)
- ESLint (flat config) + Prettier configurados e integrados
- `.gitignore` apropriado
- README do projeto não foi sobrescrito (já existe na raiz)

## Considere

- Considere já configurar paths absolutos (`@/...`) para imports — obrigatório neste projeto.
- Avalie se faz sentido adicionar um script `format` e um `prepare` com husky para hooks de commit (lint-staged no pre-commit). Recomendado para manter qualidade desde o início.
- O CI da task-000 deve passar com este código. Garanta que os scripts `lint` e `typecheck` existem no package.json.
- Considere adicionar `pnpm format:check` ao CI para garantir formatação consistente.
