# Task 308 — Dashboard: simulações salvas

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.4
**Dependências:** task-306, task-113

## Contexto

Usuário autenticado pode ver histórico de simulações da empresa, comparar resultados ao longo do tempo e re-simular com dados atualizados.

## Objetivo

Página de histórico de simulações com lista, detalhes e ação de re-simular.

## Critérios de aceitação

- Rota `/dashboard/simulacoes`
- Lista de simulações da empresa ativa (ordenadas por data, mais recente primeiro)
- Cada item mostra: data, faturamento usado, resultado resumido (diferença R$/mês)
- Clicar em uma simulação: expande detalhes (ou navega para página de detalhe)
- Botão "Re-simular com dados atuais" → roda engine com dados atuais da empresa e salva novo resultado
- Botão "Comparar" → seleciona 2 simulações e mostra lado a lado
- Paginação (10 por página)
- Empty state: "Nenhuma simulação ainda. Simule agora →"

## Saída esperada

- `app/(dashboard)/simulacoes/page.tsx`
- `app/(dashboard)/simulacoes/[id]/page.tsx`
- `components/dashboard/lista-simulacoes.tsx`
- `components/dashboard/comparar-simulacoes.tsx`
- Server action de re-simulação
