# Task 103 — Engine regime atual: Simples Nacional (Anexos I-V)

**Fase:** 1 — Engine de cálculo
**Épico:** 1.2
**Dependências:** task-101

## Contexto

O Simples Nacional é o regime mais comum entre PMEs do Cariri. Usa tabelas progressivas divididas em 5 anexos, cada um com 6 faixas de faturamento acumulado nos últimos 12 meses. A alíquota efetiva depende da faixa e tem dedução.

## Objetivo

Função pura que calcula a carga tributária de uma empresa no Simples Nacional, dado faturamento mensal e acumulado 12 meses, CNAE (para determinar o anexo) e UF.

## Restrições

- Função pura, sem efeitos colaterais
- Consome dados de `/engine/rules/regimes-atuais.json` (Anexos I-V)
- Fórmula: `aliquotaEfetiva = (faturamento12m × aliquotaNominal - deducao) / faturamento12m`
- Base legal: LC 123/2006, art. 18 e Anexos I a V
- Retorna `MemoriaCalculo` com cada passo
- Performance: < 10ms

## Critérios de aceitação

- Função `calcularSimples(input)` exportada
- Determina anexo correto baseado no CNAE (mapeamento CNAE → Anexo)
- Calcula alíquota efetiva usando tabela progressiva com dedução
- Decompõe tributos dentro do Simples (CPP, ICMS, ISS, PIS, COFINS, IRPJ, CSLL — conforme anexo)
- Memória de cálculo com: faixa identificada, alíquota nominal, dedução, alíquota efetiva, valor final
- Trata caso: faturamento acumulado não informado → usar faturamento mensal × 12 como estimativa (com flag)
- Pelo menos 3 testes unitários cobrindo anexos diferentes

## Saída esperada

- `/engine/calculators/regime-atual/simples.ts`
- `/engine/calculators/regime-atual/simples.test.ts`
- Mapeamento CNAE → Anexo (pode ser arquivo separado ou inline)
