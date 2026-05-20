# Task 301 — Auth: middleware de proteção de rotas

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.1
**Dependências:** task-300

## Contexto

Rotas do dashboard (`/dashboard/*`) devem ser acessíveis apenas por usuários autenticados com assinatura ativa. Rotas públicas (`/`, `/simular`, `/resultado/*`) permanecem abertas.

## Objetivo

Middleware Next.js que protege rotas autenticadas e redireciona para login quando necessário.

## Restrições

- Usar `clerkMiddleware` do `@clerk/nextjs/server`
- Rotas públicas: `/`, `/simular`, `/resultado/*`, `/legal/*`, `/api/pagamento/webhook`, `/api/clerk/webhook`
- Rotas protegidas: `/dashboard/*`
- Rotas admin: `/admin/*` (requer ADMIN_PASSWORD além de auth)
- Redirect para `/login` se não autenticado

## Critérios de aceitação

- `middleware.ts` na raiz com configuração Clerk
- Acesso a `/dashboard` sem auth → redirect para `/login`
- Acesso a `/dashboard` com auth → permite
- Rotas públicas acessíveis sem auth
- Rotas de API pública (webhooks) não bloqueadas
- Teste manual: navegar sem login → redirect → login → acesso ao dashboard

## Saída esperada

- `middleware.ts`
- Documentação inline sobre como adicionar nova rota protegida
