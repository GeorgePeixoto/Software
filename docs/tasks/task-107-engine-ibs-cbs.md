# Task 107 — Engine regime novo: cálculo IBS/CBS por ano

**Fase:** 1 — Engine de cálculo
**Épico:** 1.3
**Dependências:** task-101, task-106

## Contexto

Calcula quanto a empresa pagaria de IBS + CBS + tributos residuais em um ano específico da transição (2026-2033). Usa o cronograma de transição para determinar percentuais de cada tributo naquele ano.

## Objetivo

Função pura que, dado input de empresa + ano, retorna carga tributária sob o novo regime naquele ano.

## Restrições

- Função pura, sem efeitos colaterais
- Consome cronograma de `/engine/rules/cronograma-transicao.json`
- Em 2026: IBS 0,1% + CBS 0,9% (informativo, compensável)
- Em 2027+: CBS substitui PIS/COFINS; ICMS/ISS reduzem gradualmente
- ICMS NÃO compõe base de IBS/CBS (art. 12, LC 214/2025)
- Aceita parâmetro opcional `aliquotaReferencia` para override da estimativa
- Quando alíquota é estimada, incluir campo `incerteza: { min, central, max }`
- Performance: < 10ms por cálculo

## Critérios de aceitação

- Função `calcularIbsCbs(input, ano)` exportada
- Funciona para qualquer ano entre 2026 e 2033
- Em 2026 para Simples Nacional: resultado ≈ regime atual (sem impacto real)
- Decomposição: IBS, CBS, ICMS residual, ISS residual
- Memória de cálculo com fonte legal para cada passo
- Campo `incerteza` presente quando alíquota de referência é estimada
- Pelo menos 4 testes: 2026 (informativo), 2027 (CBS cheia), 2030 (transição), 2033 (sistema novo)

## Saída esperada

- `/engine/calculators/regime-novo/ibs-cbs.ts`
- `/engine/calculators/regime-novo/ibs-cbs.test.ts`
