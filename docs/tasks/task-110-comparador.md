# Task 110 — Comparador de regimes e projeção

**Fase:** 1 — Engine de cálculo
**Épico:** 1.4
**Dependências:** task-106, task-108

## Contexto

Camada de orquestração que combina regime atual + regime novo e produz a comparação que a UI vai consumir. Não faz cálculo novo — apenas compara e deriva métricas.

## Objetivo

Função `compararRegimes(input)` que retorna comparação completa com projeção, diferenças, ponto de equilíbrio e resumo executivo.

## Restrições

- Função pura, sem efeitos colaterais
- Saída serializável em JSON
- Fórmula de diferença: `(cargaNova - cargaAtual) / cargaAtual × 100`
- Invariante: `cargaAtual + diferencaAbsoluta === cargaNova`
- Valores nominais constantes (sem inflação)
- Performance: < 50ms

## Critérios de aceitação

- Função `compararRegimes(input)` exportada de `/engine/comparators/index.ts`
- Tipo `ResultadoComparacao` com: regimeAtual, serieTemporal, diferencasPorAno, pontoEquilibrio, resumoExecutivo, memoriaUnificada, alertas
- `pontoEquilibrio: number | null` — ano em que novo regime fica mais barato
- `resumoExecutivo: string` — frase em português claro gerada programaticamente
- Fixtures para 3 perfis: comércio Simples (CE), restaurante Presumido (CE), serviço Real (CE)
- Teste de invariante: `cargaAtual + diferenca === cargaNova` para todos os fixtures
- README em `/engine/comparators/` com contrato da função

## Saída esperada

- `/engine/comparators/index.ts`
- `/engine/comparators/index.test.ts`
- `/engine/comparators/__fixtures__/` (3 arquivos JSON)
- `/engine/comparators/README.md`
- Tipo `ResultadoComparacao` em `/engine/types/`
