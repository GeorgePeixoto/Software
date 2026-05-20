# Task 111 — Testes unitários da engine (casos de referência)

**Fase:** 1 — Engine de cálculo
**Épico:** 1.5
**Dependências:** task-110

## Contexto

Casos de referência são testes cujo resultado foi validado por fonte legal ou cálculo manual documentado. São imutáveis — protegem contra regressão regulatória. Diferem de testes de regressão comuns porque o número esperado tem fundamentação externa.

## Objetivo

Suíte de pelo menos 15 casos de referência validados, documentados em `docs/engine/casos-validados.md` e implementados como testes.

## Restrições

- Cada caso deve citar fonte legal ou cálculo manual documentado
- Nomes de teste em português, descritivos do cenário
- Casos imutáveis: se o teste quebrar, é a engine que está errada (não o teste)
- Cobertura mínima: 80% em `/engine/calculators/` e `/engine/comparators/`

## Critérios de aceitação

- Pelo menos 15 casos de referência implementados:
  - 5 para regime atual (Simples em diferentes faixas, Presumido comércio/serviço, Real)
  - 5 para regime novo (2026 informativo, 2027 CBS cheia, 2030 transição, 2033 final, setor diferenciado)
  - 5 para comparador (3 perfis + 2 edge cases: faturamento zero, CNAE não mapeado)
- `docs/engine/casos-validados.md` com tabela: #, regime, CNAE, faturamento, UF, resultado esperado, fonte
- Testes em `/engine/__tests__/casos-referencia.test.ts`
- Coverage report gerado com `pnpm test:coverage`
- Coverage ≥ 80% nos diretórios da engine

## Saída esperada

- `/engine/__tests__/casos-referencia.test.ts`
- `docs/engine/casos-validados.md`
- `vitest.config.ts` com coverage thresholds
- Script `test:coverage` no package.json
