# Task 108 — Engine regime novo: série temporal 2026→2033

**Fase:** 1 — Engine de cálculo
**Épico:** 1.3
**Dependências:** task-107

## Contexto

A UI precisa mostrar a curva de transição completa. Em vez de chamar `calcularIbsCbs` 8 vezes, oferecemos uma função que retorna a série temporal inteira de uma vez.

## Objetivo

Função que produz array com resultado para cada ano de 2026 a 2033 em uma única chamada.

## Restrições

- Função pura
- Retorna tipo `SerieTemporal = Array<{ ano: number, resultado: ResultadoRegimeNovo }>`
- Performance: < 50ms para série completa
- Saída serializável em JSON (sem Date, sem funções)

## Critérios de aceitação

- Função `calcularSerieTransicao(input)` exportada
- Retorna array de 8 elementos (2026-2033)
- Cada elemento tem: ano, carga total, decomposição, incerteza
- Tipo `SerieTemporal` definido e exportado de `/engine/types/`
- Teste que verifica: array tem 8 elementos, anos estão em ordem, valores são consistentes (carga em 2033 > carga em 2026 para maioria dos casos)
- Performance medida com `performance.now()` no teste

## Saída esperada

- `/engine/calculators/regime-novo/serie-temporal.ts`
- `/engine/calculators/regime-novo/serie-temporal.test.ts`
- Tipo `SerieTemporal` em `/engine/types/`
