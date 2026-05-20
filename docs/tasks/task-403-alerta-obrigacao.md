# Task 403 — Alertas automáticos: lembrete de obrigação fiscal

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.2
**Dependências:** task-400, task-310

## Contexto

O calendário fiscal (task-310) tem datas-chave. Enviar lembrete por WhatsApp 7 dias antes e 1 dia antes de cada obrigação relevante para o tenant.

## Objetivo

Sistema de lembretes automáticos baseado no calendário fiscal.

## Restrições

- Lembrete 7 dias antes (aviso) e 1 dia antes (urgente)
- Filtrar por regime/CNAE do tenant (não enviar obrigação irrelevante)
- Não enviar se tenant já viu no dashboard (opcional — pode ser v2)
- Mensagem curta e acionável

## Critérios de aceitação

- Função `verificarProximasObrigacoes()` que busca eventos nos próximos 7 dias
- Para cada evento relevante ao tenant: enviar lembrete se não enviou ainda
- Template 7 dias: "📅 Em 7 dias: [obrigação]. Prepare-se. Detalhes no seu painel."
- Template 1 dia: "⚠️ Amanhã: [obrigação]. Não perca o prazo!"
- Tracking: não reenviar mesmo lembrete para mesmo tenant
- Cron job diário (script ou Vercel Cron)
- Teste: criar obrigação para daqui 7 dias → verificar lembrete gerado

## Saída esperada

- `lib/alertas/lembrete-obrigacao.ts`
- Script `pnpm alertas:lembretes` ou configuração de Vercel Cron
- Reutiliza modelo `AlertaEnviado` da task-402
