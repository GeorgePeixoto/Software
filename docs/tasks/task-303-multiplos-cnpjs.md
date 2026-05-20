# Task 303 — Onboarding: múltiplos CNPJs por conta

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.2
**Dependências:** task-302

## Contexto

Um contador ou empresário com múltiplos negócios precisa gerenciar várias empresas na mesma conta. O modelo já suporta (relação Usuario → N Empresas), mas a UI precisa permitir adicionar/remover/alternar.

## Objetivo

Interface para gerenciar múltiplas empresas dentro de uma conta.

## Critérios de aceitação

- Página `/dashboard/empresas` listando empresas do usuário
- Botão "Adicionar empresa" → formulário (reutiliza componente do onboarding)
- Limite: 5 empresas por conta no plano padrão
- Seletor de empresa ativa no header do dashboard (dropdown)
- Empresa ativa persiste em cookie/session (não muda a cada page load)
- Botão "Remover empresa" com confirmação
- Editar dados de empresa existente

## Saída esperada

- `app/(dashboard)/empresas/page.tsx`
- `app/(dashboard)/empresas/nova/page.tsx`
- `app/(dashboard)/empresas/[id]/editar/page.tsx`
- `components/dashboard/empresa-selector.tsx`
- `lib/empresa-ativa.ts` (get/set empresa ativa via cookie)
