# Task 502 — Programa de indicação (referral)

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.3
**Dependências:** task-304

## Contexto

Boca a boca é o canal mais forte para PMEs do interior. Um programa de indicação incentiva clientes a trazer outros: quem indica ganha desconto, quem é indicado também.

## Objetivo

Sistema de referral com código único por cliente, tracking de indicações e recompensa.

## Modelo

```prisma
model Indicacao {
  id              String   @id @default(cuid())
  indicadorId     String   // tenant que indicou
  indicadoEmail   String
  codigo          String   @unique
  status          String   // "pendente" | "convertido" | "expirado"
  recompensaAplicada Boolean @default(false)
  criadoEm        DateTime @default(now())
  convertidoEm    DateTime?

  @@index([indicadorId])
  @@index([codigo])
}
```

## Critérios de aceitação

- Cada tenant tem código de indicação único (gerado no onboarding)
- Página `/indicar` pública com: benefícios, como funciona, campo para email do indicado
- Indicado recebe email com link + cupom de primeiro mês grátis
- Quando indicado assina: indicador ganha 1 mês grátis (crédito na próxima fatura)
- Dashboard do indicador: quantas indicações, quantas converteram, créditos ganhos
- Rota `/dashboard/indicacoes`
- Limite: 10 indicações ativas por tenant (anti-abuse)

## Saída esperada

- `prisma/schema.prisma` atualizado + migração
- `app/(public)/indicar/page.tsx`
- `app/(dashboard)/indicacoes/page.tsx`
- `lib/referral.ts` (criar código, validar, converter)
- `emails/indicacao-convite.tsx`
