# Task 204 — Geração PDF: conteúdo dinâmico

**Fase:** 2 — Relatório Premium
**Épico:** 2.2
**Dependências:** task-203, task-110

## Contexto

Com o template base pronto, agora preenchemos com dados reais da simulação: projeção ano a ano, comparativo, gráficos, recomendações e memória de cálculo.

## Objetivo

PDF completo gerado a partir de um `ResultadoComparacao`, com todas as seções de valor para o empresário.

## Restrições

- Consome `ResultadoComparacao` da engine
- Gráficos no PDF: usar componentes de gráfico do react-pdf (ou gerar imagem SVG e embeddar)
- Linguagem clara, sem jargão — mesmo padrão da UI
- Tempo de geração: < 10 segundos

## Seções do relatório

1. **Capa**: nome da empresa, CNAE, regime, data de geração
2. **Resumo executivo**: 1 parágrafo com conclusão principal
3. **Situação atual**: carga tributária detalhada por tributo
4. **Projeção 2026→2033**: tabela ano a ano + gráfico
5. **Análise de impacto**: diferença R$/mês, % sobre faturamento, ponto de equilíbrio
6. **Cenários**: "e se mudar de regime?" (se aplicável)
7. **Recomendações**: 3-5 ações práticas
8. **Memória de cálculo**: passos detalhados (para o contador validar)
9. **Disclaimers e fontes legais**

## Critérios de aceitação

- Função `gerarRelatorioPremium(resultado, dadosEmpresa)` retorna Buffer PDF
- Todas as 9 seções presentes e preenchidas com dados reais
- Gráfico de projeção renderizado no PDF (barras ou linhas)
- Tabela de projeção com valores formatados em R$
- Recomendações geradas programaticamente baseadas nos dados
- PDF final < 2MB
- Tempo de geração < 10s
- Teste com fixture do comparador

## Saída esperada

- `lib/pdf/relatorio-premium.tsx` (componente principal)
- `lib/pdf/secoes/` (componente por seção)
- `lib/pdf/graficos.tsx` (gráficos para PDF)
- Teste de geração com fixture
