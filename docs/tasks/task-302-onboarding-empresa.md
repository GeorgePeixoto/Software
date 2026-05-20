# Task 302 — Onboarding: cadastro de empresa

**Fase:** 3 — Auth + Dashboard SaaS
**Épico:** 3.2
**Dependências:** task-300, task-002

## Contexto

Após signup, o usuário precisa cadastrar sua empresa (ou empresas) para que o dashboard monitore alíquotas e obrigações específicas. O onboarding coleta: nome da empresa, CNPJ, CNAE, regime tributário, UF, faturamento.

## Objetivo

Fluxo de onboarding pós-signup que cadastra a primeira empresa do usuário.

## Modelo

```prisma
model Empresa {
  id                    String   @id @default(cuid())
  tenantId              String
  tenant                Tenant   @relation(fields: [tenantId], references: [id])
  usuarioId             String
  usuario               Usuario  @relation(fields: [usuarioId], references: [id])
  nome                  String
  cnpj                  String?
  cnae                  String
  regime                String
  uf                    String
  faturamentoMensalCentavos Int
  criadoEm              DateTime @default(now())
  atualizadoEm          DateTime @updatedAt

  @@index([tenantId])
  @@index([usuarioId])
}
```

## Critérios de aceitação

- Modelo `Empresa` no Prisma + migração
- Rota `/dashboard/onboarding` com formulário de cadastro
- Campos: nome, CNPJ (opcional, validado), CNAE (combobox reutilizado da task-114), regime (select), UF, faturamento
- Após cadastro: cria Tenant + Empresa, redireciona para `/dashboard`
- Se usuário já tem empresa: pula onboarding, vai direto pro dashboard
- Validação com Zod (server-side)
- Mobile-friendly

## Saída esperada

- `prisma/schema.prisma` atualizado + migração
- `app/(dashboard)/onboarding/page.tsx`
- `app/(dashboard)/onboarding/actions.ts`
- `components/onboarding/form-empresa.tsx`
