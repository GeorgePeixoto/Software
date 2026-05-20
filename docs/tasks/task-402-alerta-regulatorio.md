# Task 402 — Alertas automáticos: mudança regulatória

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.2
**Dependências:** task-400, task-309

## Contexto

Quando uma alíquota muda ou uma nova norma é publicada, clientes ativos devem ser notificados por WhatsApp. Este é um dos principais valores do SaaS.

## Objetivo

Sistema de alertas que detecta mudanças nas regras e notifica tenants afetados.

## Restrições

- Alerta disparado quando arquivo de regras é atualizado (detectar via campo `_meta.ultimaAtualizacao`)
- Enviar apenas para tenants com assinatura ativa
- Não enviar mais de 1 alerta por dia por tenant (debounce)
- Mensagem clara e curta (WhatsApp tem limite de atenção)

## Critérios de aceitação

- Função `verificarMudancasRegras()` que compara `ultimaAtualizacao` com último check
- Função `notificarTenants(mudanca)` que envia WhatsApp para afetados
- Filtro: só notifica tenants cujo CNAE/regime é afetado pela mudança
- Template de mensagem: "⚠️ Mudança tributária: [título]. [resumo em 1 frase]. Acesse seu painel para detalhes."
- Modelo `AlertaEnviado` para tracking (evitar duplicatas)
- Cron job ou trigger manual para verificar mudanças (pode ser script no package.json por enquanto)
- Teste: simular mudança → verificar alerta gerado para tenant correto

## Saída esperada

- `lib/alertas/mudanca-regulatoria.ts`
- `lib/alertas/notificar.ts`
- Modelo `AlertaEnviado` no Prisma + migração
- Script `pnpm alertas:verificar` no package.json
