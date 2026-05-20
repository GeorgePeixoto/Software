# Task 304 — Assinatura recorrente: integração Mercado Pago

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.3
**Dependências:** task-300, task-200

## Contexto

O painel SaaS custa R$ 149/mês. Mercado Pago suporta assinaturas recorrentes (preapproval). O usuário assina após o onboarding.

## Objetivo

Criar assinatura recorrente no Mercado Pago e vincular ao tenant.

## Restrições

- Usar API de Preapproval do Mercado Pago
- Plano: R$ 149/mês, cobrança mensal
- Trial: 7 dias grátis (opcional — decidir)
- Cancelamento a qualquer momento
- Credenciais em variáveis de ambiente

## Modelo

```prisma
model Assinatura {
  id              String   @id @default(cuid())
  tenantId        String   @unique
  tenant          Tenant   @relation(fields: [tenantId], references: [id])
  externalId      String   @unique // ID do Mercado Pago
  status          String   // "ativa" | "pausada" | "cancelada" | "pendente"
  plano           String   @default("mensal_149")
  inicioEm        DateTime
  proximaCobranca DateTime?
  canceladaEm     DateTime?
  criadoEm        DateTime @default(now())
  atualizadoEm    DateTime @updatedAt
}
```

## Critérios de aceitação

- Modelo `Assinatura` no Prisma + migração
- Função `criarAssinatura(tenantId, email)` em `lib/assinatura.ts`
- Página de checkout de assinatura: `/dashboard/assinar`
- Redirect para Mercado Pago para autorizar pagamento recorrente
- Callback de sucesso: salvar assinatura no banco, ativar tenant
- `.env.example` com variáveis de assinatura
- Teste em sandbox

## Saída esperada

- `prisma/schema.prisma` atualizado + migração
- `lib/assinatura.ts`
- `app/(dashboard)/assinar/page.tsx`
- `app/api/assinatura/callback/route.ts`
- `.env.example` atualizado
