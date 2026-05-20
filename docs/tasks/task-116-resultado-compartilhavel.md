# Task 116 — UI simulador: resultado compartilhável

**Fase:** 1 — Simulador grátis
**Épico:** 1.6
**Dependências:** task-115

## Contexto

Cada resultado tem um `publicId` (nanoid). Precisamos de uma rota pública que carrega o resultado salvo e renderiza a mesma tela de resultado. Isso permite compartilhar via WhatsApp — canal principal do público-alvo.

## Objetivo

Rota `/resultado/[publicId]` que carrega resultado do banco e renderiza a tela de resultado.

## Restrições

- SSR (Server Component) — resultado renderizado no servidor para SEO e performance
- Se `publicId` não encontrado, retornar 404 personalizado
- Meta tags OG dinâmicas por resultado (título com resumo do impacto)
- Botão "Copiar link" e "Compartilhar no WhatsApp"

## Critérios de aceitação

- Rota `app/(public)/resultado/[publicId]/page.tsx` funcional
- Carrega resultado do banco via `publicId`
- Renderiza mesma view de resultado (reutiliza componentes da task-115)
- 404 se publicId não existe
- Meta tags OG dinâmicas: `<title>` com "Simulação: empresa paga R$ X a mais/menos"
- Botão "Copiar link" funcional
- Botão "Compartilhar no WhatsApp" com link `wa.me/?text=...`
- URL curta e limpa: `/resultado/abc123xyz0`

## Saída esperada

- `app/(public)/resultado/[publicId]/page.tsx`
- `app/(public)/resultado/[publicId]/opengraph-image.tsx` (ou metadata dinâmica)
- `components/simulador/share-buttons.tsx`
