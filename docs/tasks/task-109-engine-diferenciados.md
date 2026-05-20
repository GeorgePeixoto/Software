# Task 109 — Engine regime novo: regimes diferenciados e Simples pós-2027

**Fase:** 1 — Engine de cálculo
**Épico:** 1.3
**Dependências:** task-107, task-102

## Contexto

Nem toda empresa paga a alíquota cheia de IBS/CBS. Setores como saúde, educação e transporte coletivo têm alíquotas reduzidas. Além disso, o Simples Nacional tem tratamento especial: não muda em 2026, e a partir de 2027 pode optar entre manter o regime unificado ou destacar IBS/CBS para gerar créditos.

## Objetivo

Estender a engine do regime novo para tratar regimes diferenciados e a opção do Simples Nacional pós-2027.

## Restrições

- Consome dados de `/engine/rules/setores-diferenciados.json` e `/engine/rules/cnaes-especiais.json`
- Simples em 2026: retornar mesmo resultado do regime atual (sem mudança)
- Simples em 2027+: calcular dois cenários (com e sem destaque de IBS/CBS)
- Setores com alíquota reduzida: aplicar redutor conforme LC 214/2025
- Regime monofásico: sinalizar como "não suportado" com aviso

## Critérios de aceitação

- Função `calcularIbsCbs` trata corretamente empresa em setor diferenciado
- Para Simples em 2027+: retorna `cenarios: { comDestaque: Resultado, semDestaque: Resultado }`
- Aviso gerado quando empresa pode optar entre cenários
- Regime monofásico (combustíveis, cigarro): retorna aviso "consulte contador" sem calcular
- Pelo menos 3 testes: setor com alíquota reduzida, Simples em 2027, CNAE monofásico

## Saída esperada

- `/engine/calculators/regime-novo/diferenciados.ts`
- `/engine/calculators/regime-novo/simples-transicao.ts`
- Testes correspondentes
- Tipo `CenariosSimples` em `/engine/types/`
