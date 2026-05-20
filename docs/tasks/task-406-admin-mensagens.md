# Task 406 — Painel de mensagens enviadas (admin)

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.3
**Dependências:** task-400

## Contexto

Para monitorar o sistema de mensagens, precisamos de um painel admin que mostre mensagens enviadas/recebidas, status de entrega e conversas encaminhadas para humano.

## Objetivo

Painel admin para visualizar e gerenciar mensagens WhatsApp.

## Critérios de aceitação

- Rota `app/admin/mensagens/page.tsx`
- Lista de mensagens com: telefone (mascarado), tipo (enviada/recebida/bot), conteúdo, status, data
- Filtros: por tipo, por status, por data, por tenant
- Destaque para mensagens "encaminhadas para humano" (pendentes de resposta)
- Botão "Responder" que abre campo de texto e envia via Evolution API
- Contadores: total enviadas hoje, taxa de entrega, conversas pendentes
- Protegido por ADMIN_PASSWORD

## Saída esperada

- `app/admin/mensagens/page.tsx`
- `components/admin/lista-mensagens.tsx`
- `components/admin/responder-mensagem.tsx`
- Server action para enviar resposta manual
