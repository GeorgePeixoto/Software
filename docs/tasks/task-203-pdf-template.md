# Task 203 — Geração PDF: template base

**Fase:** 2 — Relatório Premium
**Épico:** 2.2
**Dependências:** task-202

## Contexto

O relatório premium é um PDF detalhado com projeção 2026→2033, cenários e recomendações. Precisamos escolher a tecnologia de geração e criar o template base (layout, cabeçalho, rodapé, estilos).

## Objetivo

Template PDF base funcional com layout profissional, pronto para receber dados dinâmicos na task-204.

## Restrições

- Escolher entre react-pdf (@react-pdf/renderer) ou Puppeteer. Recomendação: react-pdf (mais leve, serverless-friendly, sem headless browser)
- Layout profissional: capa, sumário, seções numeradas, rodapé com página
- Estética alinhada ao design system (dark não funciona em PDF — usar versão light com acento lime)
- Fontes: Inter (corpo) + DM Mono (números) embeddadas no PDF
- Tamanho: A4, margens adequadas para impressão

## Critérios de aceitação

- Lib de PDF instalada e configurada
- Template base com: capa (nome do produto + dados da empresa), sumário, seção placeholder, rodapé com numeração
- Função `gerarPdfBase(dados)` que retorna Buffer do PDF
- PDF gerado tem < 500KB (sem dados reais)
- Fontes Inter e DM Mono embeddadas e renderizando corretamente
- Disclaimer fiscal no rodapé de toda página
- Teste: gerar PDF com dados mock, verificar que arquivo é válido

## Saída esperada

- `lib/pdf/template.tsx` (ou equivalente)
- `lib/pdf/styles.ts` (estilos reutilizáveis)
- `lib/pdf/fonts.ts` (registro de fontes)
- `lib/pdf/generate.ts` (função principal)
- Teste com output em `/tmp/` para inspeção visual
