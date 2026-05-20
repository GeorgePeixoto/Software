# Task 115 — UI simulador: tela de resultado + gráfico Recharts

**Fase:** 1 — Simulador grátis
**Épico:** 1.6
**Dependências:** task-110, task-114

## Contexto

Após submeter o formulário, o usuário vê o resultado da simulação. Esta é a tela mais importante do produto — precisa impactar visualmente e comunicar com clareza.

## Objetivo

Tela de resultado com: número grande de impacto, gráfico de transição, bullets de insight, disclaimers e CTA para relatório premium.

## Restrições

- Recharts como lib de gráficos
- Animação de carregamento de ~1.2s antes de mostrar resultado ("Calculando seu cenário...")
- Engine roda no servidor (server action) — nunca no client
- Mobile-first (360px)
- Cores do gráfico usando tokens do design system (variáveis CSS)

## Critérios de aceitação

- Server action que recebe `EmpresaInput`, chama `compararRegimes()`, salva resultado no banco, retorna `publicId`
- Animação de loading com texto "Calculando seu cenário..." (~1.2s)
- Número grande em destaque: diferença em R$/mês (positivo = paga mais, negativo = paga menos)
- Gráfico Recharts: barras empilhadas por ano (2026-2033) mostrando composição tributária
- 3 bullets com insights do `resumoExecutivo` e alertas
- Componente `<DisclaimerFiscal />` visível
- CTA para relatório premium: "Quer o relatório completo? R$ 47" (não bloqueante)
- Renderização correta em mobile

## Saída esperada

- `components/simulador/resultado-view.tsx`
- `components/simulador/grafico-transicao.tsx`
- `components/simulador/loading-simulacao.tsx`
- `components/simulador/disclaimer-fiscal.tsx`
- `components/simulador/cta-relatorio.tsx`
- `app/(public)/simular/actions.ts` (server action)
