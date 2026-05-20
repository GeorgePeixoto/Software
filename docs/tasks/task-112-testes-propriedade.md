# Task 112 — Testes de propriedade (fast-check) + CI

**Fase:** 1 — Engine de cálculo
**Épico:** 1.5
**Dependências:** task-110

## Contexto

Testes de propriedade verificam invariantes que devem valer para QUALQUER input válido, não apenas para casos específicos. São complementares aos casos de referência e capturam bugs que testes pontuais não encontram.

## Objetivo

Suíte de testes de propriedade com fast-check cobrindo invariantes da engine. Atualização do CI para rodar testes e bloquear merge.

## Restrições

- Usar `fast-check` como lib de property-based testing
- Testes devem rodar em < 30 segundos (limitar iterações se necessário)
- CI deve bloquear merge se testes falharem

## Critérios de aceitação

- fast-check instalado como devDependency
- Propriedades testadas:
  - Tributo nunca é negativo (para qualquer input válido)
  - Carga total = soma da decomposição (para qualquer regime)
  - `cargaAtual + diferencaAbsoluta === cargaNova` (invariante do comparador)
  - Regime novo em 2026 para Simples ≈ regime atual (diferença < 1%)
  - Alíquota efetiva nunca excede 100% do faturamento
- Generators customizados para `EmpresaInput` (faturamento entre 1000 e 100M centavos, regimes válidos, UFs válidas)
- `.github/workflows/ci.yml` atualizado: roda `pnpm test` em todo PR, bloqueia merge se falhar
- Script `pnpm test:ci` que roda testes com coverage e falha se < 80%

## Saída esperada

- `/engine/__tests__/propriedades.test.ts`
- `/engine/__tests__/generators.ts` (generators de input)
- `.github/workflows/ci.yml` atualizado
- Scripts `test:ci` no package.json
