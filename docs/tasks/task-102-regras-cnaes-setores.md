# Task 102 — Regras tributárias: CNAEs e setores diferenciados

**Fase:** 1 — Engine de cálculo
**Épico:** 1.1
**Dependências:** task-100

## Contexto

Complemento da task-101. Aqui populamos os dados de CNAEs com tratamento especial e setores com alíquota diferenciada. Lista parcial é aceitável — foco nos CNAEs mais comuns para PMEs do Cariri.

## Objetivo

Arquivos JSON com mapeamento de CNAEs especiais e setores diferenciados, validados por Zod.

## Restrições

- Foco nos top 20 CNAEs de PMEs do Cariri: comércio varejista de alimentos, restaurantes, salões de beleza, oficinas mecânicas, serviços técnicos, construção civil, transporte, etc.
- Setores diferenciados conforme LC 214/2025: saúde, educação, transporte coletivo, cesta básica, agropecuária
- Cada entrada com fonte legal quando disponível
- Lista pode ser parcial — documentar lacunas em `docs/legal/lacunas.md`

## Critérios de aceitação

- `/engine/rules/cnaes-especiais.json` com pelo menos 20 CNAEs mapeados
- `/engine/rules/setores-diferenciados.json` com pelo menos 6 setores
- `/engine/rules/icms-ufs.json` com alíquotas internas das 27 UFs + tabela interestadual
- Todos validam contra schemas da task-100
- `pnpm validate-rules` continua passando
- `docs/legal/lacunas.md` atualizado com CNAEs/setores que faltam

## Saída esperada

- 3 arquivos JSON em `/engine/rules/`
- Atualização de `docs/legal/lacunas.md`
