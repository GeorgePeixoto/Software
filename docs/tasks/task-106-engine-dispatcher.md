# Task 106 — Engine regime atual: dispatcher unificado

**Fase:** 1 — Engine de cálculo
**Épico:** 1.2
**Dependências:** task-103, task-104, task-105

## Contexto

Com os três regimes implementados individualmente, precisamos de um ponto de entrada único que recebe o input da empresa e despacha para a função correta baseado no regime informado.

## Objetivo

Função dispatcher `calcularRegimeAtual(input: EmpresaInput)` que roteia para Simples, Presumido ou Real e retorna resultado padronizado.

## Restrições

- Função pura
- Tipo `EmpresaInput` definido e exportado de `/engine/types/`
- Tipo `ResultadoRegimeAtual` padronizado (total, decomposição, memória, avisos, precisaoReduzida)
- Se regime inválido, throw com mensagem clara
- Se CNAE não mapeado, calcular com alíquota genérica + flag `precisaoReduzida`

## Critérios de aceitação

- Função `calcularRegimeAtual(input)` exportada de `/engine/calculators/regime-atual/index.ts`
- Tipo `EmpresaInput` definido com todos os campos (regime, cnae, faturamento, uf, percentuais, etc.)
- Tipo `ResultadoRegimeAtual` com: totalCentavos, decomposicao, memoriaCalculo, avisos, precisaoReduzida
- Despacha corretamente para cada regime
- Teste que verifica dispatch para os 3 regimes
- `/engine/calculators/README.md` com documentação do contrato

## Saída esperada

- `/engine/calculators/regime-atual/index.ts`
- `/engine/types/input.ts` (EmpresaInput)
- `/engine/types/resultado.ts` (ResultadoRegimeAtual)
- `/engine/calculators/README.md`
- Teste de integração do dispatcher
