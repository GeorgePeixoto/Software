# Task 310 — Calendário de obrigações fiscais da transição

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.6
**Dependências:** task-306

## Contexto

A transição tributária tem datas-chave: início de novas obrigações acessórias, prazos de adaptação, datas de mudança de alíquota. O calendário ajuda o empresário a não perder prazos.

## Objetivo

Calendário visual com obrigações fiscais relevantes para a empresa do usuário.

## Restrições

- Dados do calendário em arquivo estático (`content/calendario-fiscal.ts`) — atualizável sem deploy via revalidação futura
- Filtrar por regime e tipo de empresa
- Não é um calendário genérico — são eventos específicos da reforma tributária

## Critérios de aceitação

- Rota `/dashboard/calendario`
- Visualização mensal com eventos marcados
- Cada evento: data, título, descrição curta, fonte legal, relevância (alta/média/baixa)
- Filtro por tipo: obrigação acessória, mudança de alíquota, prazo de adaptação
- Próximos 3 eventos destacados no topo
- Eventos passados em cinza
- Pelo menos 15 eventos cadastrados (2026-2027)
- Mobile: lista cronológica em vez de grid de calendário

## Saída esperada

- `app/(dashboard)/calendario/page.tsx`
- `components/dashboard/calendario-mensal.tsx`
- `components/dashboard/lista-eventos.tsx`
- `content/calendario-fiscal.ts` (dados tipados)
