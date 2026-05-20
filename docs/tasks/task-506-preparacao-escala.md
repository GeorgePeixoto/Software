# Task 506 — Preparação para escala

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.5
**Dependências:** task-505

## Contexto

Com os primeiros 20 clientes validados, preparamos a infraestrutura para crescer: rate limits robustos, filas para processamento async, monitoring avançado e documentação operacional.

## Objetivo

Infraestrutura pronta para suportar 1000+ tenants sem degradação.

## Critérios de aceitação

- Rate limiting robusto: por tenant, por IP, por endpoint (usar Upstash Redis ou similar)
- Fila para processamento async: geração de PDF, envio de email, alertas WhatsApp (Vercel Queue, Inngest ou BullMQ)
- Health check endpoint `/api/health` com: status do banco, status da fila, latência
- Alertas Sentry configurados: error rate > threshold → notificação
- Uptime monitoring externo (BetterUptime, Checkly ou similar)
- Documentação: `docs/escala.md` com limites conhecidos, pontos de gargalo, plano de migração
- Load test básico: script que simula 100 simulações simultâneas e mede latência
- Plano de migração documentado: quando sair do Vercel free/pro, quando sair do Neon free

## Saída esperada

- `lib/queue.ts` (abstração de fila)
- `lib/rate-limit.ts` atualizado (Redis-backed)
- `app/api/health/route.ts` atualizado
- `scripts/load-test.ts`
- `docs/escala.md`
- Configuração de uptime monitoring
