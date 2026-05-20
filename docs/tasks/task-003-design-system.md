# Task 003 — Design system base

**Fase:** 0 — Setup e fundação
**Épico:** 0.3
**Dependências:** task-001

## Contexto

Software fiscal precisa parecer sério, confiável e moderno. A identidade visual do produto segue uma estética dark com acento neon — referências: Linear, Vercel, Resend. Antes de construir telas, é importante ter os tokens de design definidos para que cada componente futuro herde consistência.

## Objetivo

Tokens de design configurados no Tailwind (cores, tipografia, espaçamento, raios), fontes carregadas, tema dark como padrão, e uma página de "kit" (`/dev/styleguide`, **não-pública em produção**) que demonstra os tokens aplicados.

## Restrições

- Tema **dark como padrão**. Dark mode via `class` strategy (não `media`), para controle programático futuro.
- Cores principais:
  - Fundo: near-black (algo como `#0A0A0A` ou `#0B0B0B`, decida o tom exato)
  - Texto: branco com variações de opacidade para hierarquia
  - Acento primário: lime/neon green (algo como `#A3FF12`, `#84FF00` — escolha um tom que tenha bom contraste no fundo dark)
  - Cores semânticas: sucesso, erro, alerta, info — definir tons que combinem com o tema
- Tipografia:
  - **Syne** — display/títulos
  - **DM Mono** — números, valores monetários, dados técnicos
  - **Inter** — corpo de texto, UI geral
- Fontes carregadas via `next/font` (não via `<link>` no head)
- shadcn/ui v2 (CLI: `pnpx shadcn@latest`) com componentes herdando os tokens
- Variáveis CSS com convenção `--color-*` para interop com libs de gráficos (Recharts)

## Critérios de aceitação

- `tailwind.config.ts` (ou CSS config v4) com paleta, fontes e tokens documentados
- Variáveis CSS na raiz (`:root` / `.dark`) exportando cores em formato consumível por JS
- Fontes carregando corretamente e visíveis na styleguide
- Página de styleguide mostra: paleta completa, exemplos de tipografia (h1-h4, body, mono), botões em diferentes estados, exemplo de input, exemplo de card
- A styleguide **só é acessível quando `NODE_ENV=development`** (middleware ou conditional rendering)
- Componentes shadcn/ui instalados: Button, Input, Card, Badge, Separator — todos respeitando o tema
- Utilitários Tailwind criados: `font-display` (Syne), `font-mono` (DM Mono), `font-body` (Inter)

## Considere

- Avalie usar `oklch()` no Tailwind para as cores — melhor perceptual uniformity e facilita gerar variações.
- Pense em como expor os tokens de cor para a engine de gráficos (Recharts): se você usar variável CSS, crie também um arquivo `lib/theme-tokens.ts` exportando os mesmos valores como constantes JS.
- Não crie todos os componentes shadcn de uma vez. Instale só os listados nos critérios.
- Avalie se vale já configurar `next-themes` para alternância dark/light, mesmo que o light não esteja pronto. Pode ser útil para a styleguide demonstrar ambos. Não é obrigatório.
