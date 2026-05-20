# Task 500 — Onboarding guiado in-app (tour interativo)

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.1
**Dependências:** task-307

## Contexto

Novos usuários do SaaS precisam entender o dashboard rapidamente. Um tour interativo guia pelos principais recursos na primeira visita.

## Objetivo

Tour interativo que aparece na primeira vez que o usuário acessa o dashboard.

## Restrições

- Usar lib leve (driver.js ou similar — sem dependências pesadas)
- Tour aparece apenas uma vez (flag no banco ou localStorage)
- Pode ser pulado a qualquer momento
- Mobile-friendly (tooltips posicionados corretamente)

## Critérios de aceitação

- Tour com 5-7 passos cobrindo: visão geral, simulações, alíquotas, calendário, assinatura
- Cada passo: highlight do elemento + tooltip com explicação curta
- Botões: "Próximo", "Pular tour", "Anterior"
- Flag `tourCompletado` no modelo Usuario (ou localStorage)
- Não aparece novamente após completar ou pular
- Botão "Rever tour" nas configurações do perfil
- Funciona em mobile (tooltips não saem da tela)

## Saída esperada

- `components/dashboard/tour-onboarding.tsx`
- `lib/tour.ts` (configuração dos passos)
- Lib de tour instalada
- Modelo Usuario atualizado (se usar flag no banco)
