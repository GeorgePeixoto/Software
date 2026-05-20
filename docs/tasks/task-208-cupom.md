# Task 208 — Cupom de desconto

**Fase:** 2 — Relatório Premium
**Épico:** 2.4
**Dependências:** task-202

## Contexto

Leads capturados recebem cupom `REFORMA10` (R$ 10 de desconto). Precisamos de um sistema simples de cupons que valide e aplique desconto no checkout.

## Objetivo

Modelo de cupom, validação e aplicação no fluxo de pagamento.

## Restrições

- MVP: cupons com código fixo (não gerados por lead)
- Validação: código existe, não expirou, não atingiu limite de uso
- Desconto: valor fixo em centavos (não percentual, para simplificar)
- Um cupom por compra

## Modelo

```prisma
model Cupom {
  id              String   @id @default(cuid())
  codigo          String   @unique
  descontoCentavos Int
  limiteUsos      Int?     // null = ilimitado
  usosAtuais      Int      @default(0)
  expiraEm        DateTime?
  ativo           Boolean  @default(true)
  criadoEm        DateTime @default(now())
}
```

## Critérios de aceitação

- Modelo `Cupom` no Prisma + migração
- Seed com cupom `REFORMA10` (desconto: 1000 centavos = R$ 10)
- Função `validarCupom(codigo)` → retorna cupom ou erro
- Função `aplicarCupom(codigo, pagamentoId)` → incrementa uso, aplica desconto
- Input de cupom no checkout com feedback visual (válido/inválido/expirado)
- Preço atualizado em tempo real ao aplicar cupom
- Teste: aplicar cupom válido, tentar cupom expirado, tentar cupom com limite atingido

## Saída esperada

- `prisma/schema.prisma` atualizado + migração
- `prisma/seed.ts` atualizado com cupom REFORMA10
- `lib/cupom.ts` (validar + aplicar)
- `components/checkout/input-cupom.tsx`
- Testes
