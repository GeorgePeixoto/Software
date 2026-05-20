# Task 104 — Engine regime atual: Lucro Presumido

**Fase:** 1 — Engine de cálculo
**Épico:** 1.2
**Dependências:** task-101

## Contexto

Lucro Presumido é o segundo regime mais comum para PMEs que faturam acima do limite do Simples. Usa percentuais de presunção de lucro por tipo de atividade para calcular IRPJ e CSLL, e aplica PIS/COFINS cumulativos sobre o faturamento.

## Objetivo

Função pura que calcula a carga tributária de uma empresa no Lucro Presumido.

## Restrições

- Função pura, sem efeitos colaterais
- Consome dados de `/engine/rules/regimes-atuais.json`
- Percentuais de presunção: 8% (comércio/indústria), 32% (serviços), 16% (transporte), etc.
- IRPJ: 15% sobre lucro presumido + adicional de 10% sobre excedente de R$ 20k/mês
- CSLL: 9% sobre lucro presumido (12% para serviços)
- PIS: 0,65% sobre faturamento (cumulativo)
- COFINS: 3% sobre faturamento (cumulativo)
- ICMS ou ISS conforme tipo de atividade (usar dados de UF)
- Base legal: Lei 9.249/1995, Lei 9.430/1996

## Critérios de aceitação

- Função `calcularPresumido(input)` exportada
- Determina percentual de presunção baseado no tipo de atividade (derivado do CNAE)
- Calcula IRPJ (com adicional quando aplicável), CSLL, PIS, COFINS
- Adiciona ICMS ou ISS conforme `percentualServicos`
- Memória de cálculo com cada tributo separado
- Pelo menos 3 testes: comércio puro, serviço puro, atividade mista

## Saída esperada

- `/engine/calculators/regime-atual/presumido.ts`
- `/engine/calculators/regime-atual/presumido.test.ts`
