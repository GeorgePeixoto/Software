# Task 114 — UI simulador: formulário multi-step (3 passos)

**Fase:** 1 — Simulador grátis
**Épico:** 1.6
**Dependências:** task-003, task-113

## Contexto

O formulário é a porta de entrada do produto. Precisa ser rápido, claro e funcionar perfeitamente em mobile. Coleta os dados mínimos para a engine calcular.

## Objetivo

Formulário de 3 passos com validação inline, progresso visual e estado via URL params.

## Os 3 passos

1. **Regime + Faturamento**: select de regime tributário + input monetário de faturamento mensal
2. **Atividade + UF**: combobox de CNAE (top 20 pré-listados + busca) + select de UF (default CE) + slider de % serviços
3. **Confirmação**: resumo dos dados + botão "Simular impacto"

## Restrições

- Mobile-first: funciona em 360px
- Acessibilidade: labels, navegação por teclado, contraste AA
- Validação inline com Zod (client-side)
- Estado em URL search params: `/simular?passo=2&regime=simples&faturamento=5000000`
- Sem hard-reload entre passos
- Componentes shadcn/ui: Input, Select, Button, Progress

## Critérios de aceitação

- Rota `/simular` com formulário de 3 passos
- Barra de progresso visual (passo 1/3, 2/3, 3/3)
- Botões "Voltar" e "Avançar" funcionais
- Validação impede avançar com dados incompletos (mensagem inline)
- Input de faturamento com máscara monetária (R$ X.XXX,XX)
- Combobox de CNAE com top 20 atividades do Cariri pré-listadas + busca por texto
- Select de UF com todas as 27 UFs, default CE
- Estado preservado na URL (voltar pelo navegador funciona)
- Passo 3 mostra resumo legível dos dados antes de submeter
- Renderização impecável em 360px

## Saída esperada

- `app/(public)/simular/page.tsx`
- `components/simulador/form-step-1.tsx`
- `components/simulador/form-step-2.tsx`
- `components/simulador/form-step-3.tsx`
- `components/simulador/progress-bar.tsx`
- `components/simulador/cnae-combobox.tsx`
- `content/cnaes-cariri.ts` (top 20 CNAEs pré-listados)
