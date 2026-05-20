# Task 119 — Landing page + SEO + páginas legais

**Fase:** 1 — Simulador grátis
**Épico:** 1.8
**Dependências:** task-003, task-115

## Contexto

A home precisa vender o produto para quem chega via busca ou indicação. SEO é estratégico — termos como "simulador reforma tributária" têm volume crescente. Páginas legais (privacidade, termos) são obrigatórias antes de capturar qualquer dado.

## Objetivo

Landing page completa com hero, seções de venda, FAQ, footer. Páginas legais. SEO otimizado.

## Restrições

- SSR/SSG (não client-only)
- LCP < 2.5s, CLS < 0.1
- Lighthouse Performance ≥ 90, SEO = 100
- Plausible analytics integrado
- `<html lang="pt-BR">`
- Schema.org: FAQPage, SoftwareApplication

## Critérios de aceitação

- Hero com input de faturamento + select de regime → redireciona para `/simular?faturamento=X&regime=Y`
- Seção "Como funciona" (3 passos: Simule → Compare → Decida)
- Seção explicando a reforma (linguagem clara, sem juridiquês)
- Seção das 3 camadas do produto (grátis, R$ 47, R$ 149/mês)
- FAQ com 8+ perguntas em `content/faq.ts` (tipado)
- Footer com links legais, disclaimer fiscal, contato
- Páginas legais: `/legal/privacidade`, `/legal/termos`, `/legal/cookies`
- `app/sitemap.ts` e `app/robots.ts`
- OG image (estática ou `@vercel/og`)
- Meta tags completas (title, description, OG, Twitter Card)
- Plausible script com env var `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `docs/seo.md` com keywords alvo

## Saída esperada

- `app/page.tsx` + `components/landing/` (hero, como-funciona, produto, faq, footer)
- `app/(public)/legal/privacidade/page.tsx`
- `app/(public)/legal/termos/page.tsx`
- `app/(public)/legal/cookies/page.tsx`
- `content/faq.ts`
- `app/sitemap.ts`, `app/robots.ts`
- OG image
- `docs/seo.md`
