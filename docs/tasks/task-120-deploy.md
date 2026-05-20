# Task 120 — Deploy em produção

**Fase:** 1 — Simulador grátis
**Épico:** 1.9
**Dependências:** todas as anteriores da Fase 1

## Contexto

Fim da Fase 1 — produto no ar com simulador funcional, captura de leads e landing page. A partir daqui, pode divulgar e capturar leads reais.

## Objetivo

App publicado em Vercel com banco Neon, email Resend verificado, Sentry configurado, domínio próprio.

## Restrições

- Vercel para hosting
- Neon para banco (free tier)
- SSL/HTTPS obrigatório
- Secrets em variáveis de ambiente da Vercel
- Cold start < 3s

## Critérios de aceitação

- App acessível por URL pública HTTPS
- Banco Neon provisionado, migração aplicada
- Resend com domínio verificado (emails não caem em spam)
- Plausible coletando dados
- Sentry configurado com source maps
- Lighthouse produção: Performance ≥ 90, SEO = 100, Acessibilidade ≥ 95
- Checklist pré-lançamento completo (ver abaixo)
- `docs/deploy.md` e `docs/runbook.md` criados

## Checklist pré-lançamento

- [ ] Termos de uso e privacidade publicados
- [ ] Disclaimer fiscal em todo resultado
- [ ] Turnstile + rate limit ativos
- [ ] Email testado em produção
- [ ] Sitemap válido
- [ ] robots.txt liberando indexação
- [ ] 404 e 500 personalizados
- [ ] Favicon + ícones PWA
- [ ] OG image testada no WhatsApp
- [ ] Backup do banco testado

## Custos estimados

| Serviço | Custo/mês |
|---------|-----------|
| Vercel Pro | ~$20 |
| Neon Free | $0 |
| Resend Free | $0 |
| Plausible | ~$9 |
| Sentry Free | $0 |
| Turnstile Free | $0 |
| **Total** | **~$29/mês** |

## Saída esperada

- App publicado
- `docs/deploy.md` (providers, custos, rollback, variáveis)
- `docs/runbook.md` (procedimentos de incidente)
- `docs/lancamento-fase1.md` (checklist preenchido)
