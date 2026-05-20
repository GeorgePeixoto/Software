# Task 400 — Integração Evolution API: setup + envio básico

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.1
**Dependências:** task-305

## Contexto

WhatsApp é o canal principal do público-alvo. Evolution API é a solução já dominada pelo dev para envio/recebimento de mensagens. Esta task configura a integração base.

## Objetivo

Evolution API conectada, função de envio de mensagem de texto funcionando.

## Restrições

- Evolution API self-hosted (ou cloud se disponível)
- Credenciais em variáveis de ambiente
- Função de envio deve ser idempotente (não reenviar se já enviou)
- Rate limit: respeitar limites do WhatsApp (não spam)
- Número de envio verificado e ativo

## Critérios de aceitação

- Evolution API configurada (docker-compose ou URL de instância)
- Função `enviarMensagem(telefone, texto)` em `lib/whatsapp.ts`
- Função `enviarMensagemTemplate(telefone, template, params)` para mensagens estruturadas
- Modelo Prisma `MensagemWhatsApp` com: id, telefone, conteudo, tipo, status, enviadaEm, tenantId
- Teste: enviar mensagem para número de teste → status "enviada"
- `.env.example` com `EVOLUTION_API_URL`, `EVOLUTION_API_KEY`, `EVOLUTION_INSTANCE`
- `docs/integracao-whatsapp.md` com setup e troubleshooting

## Saída esperada

- `lib/whatsapp.ts`
- `prisma/schema.prisma` atualizado (MensagemWhatsApp) + migração
- `.env.example` atualizado
- `docs/integracao-whatsapp.md`
