# Task 101 — Regras tributárias: dados JSON (alíquotas, cronograma, regimes)

**Fase:** 1 — Engine de cálculo
**Épico:** 1.1
**Dependências:** task-100

## Contexto

Com os schemas definidos (task-100), agora populamos os arquivos JSON com dados oficiais: alíquotas-teste 2026, cronograma de transição, e estrutura dos regimes atuais (Simples Nacional com anexos I-V, Lucro Presumido, Lucro Real).

## Objetivo

Arquivos JSON validados por Zod contendo os dados tributários fundamentais para a engine calcular.

## Restrições

- Cada JSON tem campo `_meta` com fonte legal citada
- Cada JSON tem campo `vigencia`
- Dados do Simples Nacional: tabelas completas dos Anexos I a V (LC 123/2006) com faixas de faturamento e alíquotas efetivas
- Dados de Lucro Presumido: percentuais de presunção por tipo de atividade
- Cronograma: percentuais de cada tributo por ano (2026-2033)
- Alíquota de referência estimada: 27,5% (12,5% IBS + 15% CBS) com flag de incerteza

## Critérios de aceitação

- `/engine/rules/aliquotas-teste-2026.json` — IBS 0,1% + CBS 0,9%
- `/engine/rules/cronograma-transicao.json` — percentuais por ano
- `/engine/rules/regimes-atuais.json` — Simples (Anexos I-V completos), Presumido, Real
- Script `pnpm validate-rules` passa sem erros (valida todos os JSONs contra schemas)
- Teste Vitest que importa cada JSON e valida contra schema correspondente
- `/engine/rules/README.md` explicando como adicionar/atualizar regras

## Saída esperada

- 3 arquivos JSON em `/engine/rules/`
- Script `validate-rules` no package.json
- Teste em `/engine/rules/rules.test.ts`
- `/engine/rules/README.md`
