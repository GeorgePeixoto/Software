# Task 105 — Engine regime atual: Lucro Real

**Fase:** 1 — Engine de cálculo
**Épico:** 1.2
**Dependências:** task-101

## Contexto

Lucro Real é obrigatório para empresas com faturamento acima de R$ 78M/ano, mas algumas PMEs optam por ele quando têm margem baixa. Para simulação, não temos acesso ao resultado contábil real — usamos margem de lucro informada ou estimada por setor.

## Objetivo

Função pura que calcula a carga tributária estimada de uma empresa no Lucro Real, usando margem de lucro como aproximação.

## Restrições

- Função pura, sem efeitos colaterais
- Aproximação: `lucroEstimado = faturamento × margemLucro`
- Se margem não informada, usar estimativa por setor (tabela interna)
- IRPJ: 15% sobre lucro + adicional 10% sobre excedente R$ 20k/mês
- CSLL: 9% sobre lucro
- PIS: 1,65% sobre faturamento (não-cumulativo, com créditos estimados)
- COFINS: 7,6% sobre faturamento (não-cumulativo, com créditos estimados)
- Créditos de PIS/COFINS: estimar como % do faturamento (simplificação documentada)
- ICMS ou ISS conforme atividade
- Documentar claramente que é aproximação na memória de cálculo

## Critérios de aceitação

- Função `calcularReal(input)` exportada
- Aceita `margemLucro` opcional; se ausente, usa estimativa por setor
- Calcula IRPJ, CSLL, PIS não-cumulativo, COFINS não-cumulativo
- Memória de cálculo inclui aviso: "Lucro Real aproximado — resultado real depende de escrituração contábil"
- Flag `precisaoReduzida: true` quando margem é estimada
- Pelo menos 2 testes: com margem informada e com margem estimada

## Saída esperada

- `/engine/calculators/regime-atual/real.ts`
- `/engine/calculators/regime-atual/real.test.ts`
- Tabela de margens estimadas por setor (pode ser inline ou em rules/)
