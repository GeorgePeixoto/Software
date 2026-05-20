# Task 401 — Integração Evolution API: recebimento + webhook

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.1
**Dependências:** task-400

## Contexto

Além de enviar, precisamos receber mensagens dos clientes (para o chatbot FAQ e suporte). Evolution API envia webhooks quando uma mensagem chega.

## Objetivo

Webhook que recebe mensagens do WhatsApp e as persiste para processamento.

## Restrições

- Webhook deve ser rápido (< 500ms) — processar async se necessário
- Validar que webhook vem da Evolution API (token/secret)
- Não responder automaticamente a toda mensagem (apenas quando chatbot estiver ativo)
- Armazenar mensagem recebida no banco

## Critérios de aceitação

- Webhook `app/api/whatsapp/webhook/route.ts`
- Valida autenticidade do webhook
- Persiste mensagem recebida no modelo `MensagemWhatsApp` com tipo "recebida"
- Extrai: telefone remetente, conteúdo, timestamp
- Se mensagem é de tenant conhecido: vincula ao tenant
- Se mensagem é de número desconhecido: salva sem tenant (para triagem)
- Log estruturado de mensagens recebidas
- Teste: simular webhook → verificar mensagem salva

## Saída esperada

- `app/api/whatsapp/webhook/route.ts`
- `lib/whatsapp.ts` atualizado (função de processamento)
- Modelo `MensagemWhatsApp` atualizado se necessário
