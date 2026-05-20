# Task 117 — Captura de lead: modelo + server action + Turnstile

**Fase:** 1 — Simulador grátis
**Épico:** 1.7
**Dependências:** task-002, task-116

## Contexto

Após ver o resultado, oferecemos ao usuário: "Receba esta simulação por email + cupom de R$ 10 no relatório". A captura é opcional e acontece depois do resultado (lead mais qualificado).

## Objetivo

Modelo de lead no Prisma, formulário de captura com Turnstile, server action de persistência com rate limit.

## Restrições

- Captura é opcional — resultado fica acessível sem dar email
- LGPD: checkbox de consentimento obrigatório, link para política de privacidade
- Cloudflare Turnstile (invisível) para anti-spam
- Rate limit: 10 capturas por IP por hora (middleware Next.js)
- CNPJ validado com `@brazilian-utils/brazilian-utils`
- IP mascarado (últimos octetos zerados) para LGPD

## Modelo Prisma

```prisma
model Lead {
  id                       String   @id @default(cuid())
  email                    String
  cnpj                     String?
  nomeEmpresa              String?
  resultadoId              String
  resultado                SimulacaoResultado @relation(fields: [resultadoId], references: [id])
  origem                   Json?
  criadoEm                 DateTime @default(now())
  consentimentoComunicacao Boolean
  ipMascarado              String
  userAgent                String?
  unsubscribedEm           DateTime?

  @@index([email])
  @@index([criadoEm])
}
```

## Critérios de aceitação

- Modelo `Lead` no Prisma com migração aplicada
- Formulário de captura na tela de resultado (email + CNPJ opcional + nome empresa opcional + checkbox consentimento)
- Turnstile widget invisível integrado
- Server action valida: email (formato), CNPJ (dígito verificador), consentimento (true), token Turnstile
- Rate limit middleware: 10/hora por IP
- IP mascarado antes de salvar
- Variáveis em `.env.example`: `TURNSTILE_SECRET_KEY`, `TURNSTILE_SITE_KEY`
- Teste da validação (Zod schema do formulário)

## Saída esperada

- `prisma/schema.prisma` atualizado + migração
- `components/simulador/form-captura-lead.tsx`
- `app/(public)/resultado/[publicId]/actions.ts` (server action de captura)
- `lib/turnstile.ts` (validação server-side do token)
- `lib/rate-limit.ts` (middleware)
- `.env.example` atualizado
