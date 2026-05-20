# Task 206 — Página de download do relatório

**Fase:** 2 — Relatório Premium
**Épico:** 2.3
**Dependências:** task-205

## Contexto

Após pagamento, o usuário precisa de uma página para baixar o PDF caso não encontre o email ou queira acessar depois.

## Objetivo

Página de download acessível por link único (enviado no email), com expiração e proteção.

## Restrições

- Link com token único (não adivinhável)
- Expiração: 7 dias após geração
- Após expiração: mensagem "link expirado, entre em contato"
- Sem autenticação necessária (compra one-shot, não tem conta)

## Critérios de aceitação

- Rota `app/(public)/download/[token]/page.tsx`
- Token gerado na criação do pagamento (UUID ou nanoid longo)
- Se token válido e não expirado: botão de download + preview do que contém
- Se token expirado: mensagem amigável + email de contato
- Se token inválido: 404
- Botão "Reenviar por email" (reenvia o email com PDF)
- Página mostra: nome da empresa, data de compra, resumo do conteúdo

## Saída esperada

- `app/(public)/download/[token]/page.tsx`
- `lib/download-token.ts` (geração e validação)
- Modelo atualizado com campo `downloadToken` e `downloadExpiraEm`
