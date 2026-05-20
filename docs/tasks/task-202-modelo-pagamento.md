# Task 202 — Modelo Prisma de pagamento + status

**Fase:** 2 — Relatório Premium
**Épico:** 2.1
**Dependências:** task-200

## Contexto

Precisamos persistir cada pagamento com seu status, vincular ao lead/resultado, e ter histórico para suporte e analytics.

## Objetivo

Modelo de pagamento no Prisma com status machine simples.

## Modelo

```prisma
model Pagamento {
  id              String   @id @default(cuid())
  externalId      String   @unique // ID do Mercado Pago
  resultadoId     String
  resultado       SimulacaoResultado @relation(fields: [resultadoId], references: [id])
  email           String
  valorCentavos   Int
  metodo          String   // "pix" | "cartao"
  status          String   // "pendente" | "aprovado" | "rejeitado" | "reembolsado"
  parcelas        Int      @default(1)
  cupomUsado      String?
  criadoEm        DateTime @default(now())
  atualizadoEm    DateTime @updatedAt
  pdfGeradoEm     DateTime?
  pdfUrl          String?

  @@index([email])
  @@index([status])
  @@index([externalId])
}
```

## Critérios de aceitação

- Modelo criado + migração aplicada
- Função `atualizarStatusPagamento(externalId, novoStatus)` em `lib/pagamento.ts`
- Webhook (task-200) usa essa função para atualizar status
- Transição de status validada (não pode ir de "aprovado" para "pendente")
- Relação com `SimulacaoResultado` funcional
- Teste: criar pagamento, atualizar status, verificar histórico

## Saída esperada

- `prisma/schema.prisma` atualizado + migração
- `lib/pagamento.ts`
- Teste de integração
