# Task 300 — Auth: setup Clerk (signup, login, recuperação)

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.1
**Dependências:** task-120

## Contexto

O painel SaaS (R$ 149/mês) requer autenticação. Clerk oferece auth completo com UI pronta, social login, MFA e boa DX para Next.js.

## Objetivo

Clerk integrado com signup, login, recuperação de senha e perfil do usuário.

## Restrições

- Clerk SDK para Next.js (`@clerk/nextjs`)
- Páginas de auth customizadas (não usar Clerk hosted pages — manter estética do produto)
- Sincronizar usuário Clerk com modelo `Usuario` no Prisma (webhook de criação)
- Suporte a email/senha + Google OAuth

## Critérios de aceitação

- Clerk instalado e configurado
- Páginas: `/login`, `/signup`, `/recuperar-senha`
- Estética alinhada ao design system (dark, lime accent)
- Webhook `app/api/clerk/webhook/route.ts` que cria `Usuario` no banco ao signup
- Modelo Prisma `Usuario` com: id, clerkId, email, nome, criadoEm
- Login funcional com email/senha
- Login funcional com Google
- Recuperação de senha funcional
- `.env.example` com `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_WEBHOOK_SECRET`

## Saída esperada

- `app/(auth)/login/page.tsx`
- `app/(auth)/signup/page.tsx`
- `app/(auth)/recuperar-senha/page.tsx`
- `app/api/clerk/webhook/route.ts`
- `prisma/schema.prisma` atualizado (modelo Usuario) + migração
- `lib/auth.ts` (helpers: getCurrentUser, requireAuth)
- `.env.example` atualizado
