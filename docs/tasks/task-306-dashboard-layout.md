# Task 306 — Dashboard: layout base

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.4
**Dependências:** task-301, task-003

## Contexto

O dashboard precisa de um layout consistente: sidebar com navegação, header com empresa ativa e perfil, área de conteúdo. Este layout é compartilhado por todas as páginas do dashboard.

## Objetivo

Layout base do dashboard com sidebar, header e área de conteúdo.

## Restrições

- Mobile: sidebar vira drawer (hamburger menu)
- Desktop: sidebar fixa à esquerda (240px)
- Estética dark com acento lime (design system)
- Sidebar items: Visão geral, Simulações, Alíquotas, Calendário, Empresas, Assinatura
- Header: nome da empresa ativa (selector), avatar/perfil, notificações (placeholder)

## Critérios de aceitação

- Layout em `app/(dashboard)/layout.tsx`
- Sidebar com navegação funcional (links ativos destacados)
- Header com selector de empresa e menu de perfil
- Responsivo: drawer em mobile, sidebar fixa em desktop
- Transição suave ao abrir/fechar drawer
- Breadcrumb ou título da página atual visível
- Skeleton loading enquanto dados carregam

## Saída esperada

- `app/(dashboard)/layout.tsx`
- `components/dashboard/sidebar.tsx`
- `components/dashboard/header.tsx`
- `components/dashboard/mobile-drawer.tsx`
- `components/dashboard/nav-items.ts` (configuração de navegação)
