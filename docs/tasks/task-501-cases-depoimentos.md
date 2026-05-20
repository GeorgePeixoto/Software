# Task 501 — Página de cases e depoimentos

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.2
**Dependências:** task-119

## Contexto

Prova social é fundamental para conversão. Com os primeiros clientes, coletamos depoimentos e criamos cases de uso reais.

## Objetivo

Página pública com cases de sucesso e depoimentos de clientes.

## Restrições

- Conteúdo em arquivo tipado (`content/cases.ts`) — fácil de atualizar
- Sem depoimentos inventados — usar reais ou não publicar
- Fotos com consentimento ou avatares genéricos
- SEO: cada case pode ser uma página individual (slug)

## Critérios de aceitação

- Página `/cases` com lista de cases
- Cada case: nome da empresa (com permissão), setor, regime, desafio, resultado, depoimento
- Página individual `/cases/[slug]` com detalhes
- Seção de depoimentos na home (carrossel ou grid)
- Estrutura pronta para receber conteúdo (mesmo que comece com 0 cases reais)
- Placeholder: "Em breve, cases de empresas do Cariri que já se adaptaram"
- Schema.org: Review, LocalBusiness

## Saída esperada

- `app/(public)/cases/page.tsx`
- `app/(public)/cases/[slug]/page.tsx`
- `content/cases.ts` (dados tipados, inicialmente vazio ou com placeholder)
- `components/landing/depoimentos.tsx` (para a home)
