# Task 503 — Canal contábil: white-label simplificado

**Fase:** 5 — Polimento e crescimento
**Épico:** 5.4
**Dependências:** task-312

## Contexto

Contadores atendem dezenas de PMEs. Se um contador adota o produto, traz N clientes de uma vez. Um modo white-label simplificado permite que o contador use o produto "como se fosse dele" para seus clientes.

## Objetivo

Modo contador: uma conta gerencia múltiplos tenants (empresas-clientes), com branding simplificado.

## Restrições

- Não é white-label completo (sem domínio customizado, sem logo customizado)
- É uma conta "tipo contador" que pode criar e gerenciar empresas de terceiros
- Comissão: contador ganha 20% de cada assinatura de cliente indicado (tracking)
- Limite MVP: 50 empresas por conta contador

## Critérios de aceitação

- Tipo de conta "contador" no modelo Usuario (flag ou role)
- Dashboard do contador: lista de empresas-clientes, status de cada uma, receita gerada
- Contador pode: criar empresa para cliente, simular para cliente, ver resultados
- Contador NÃO pode: acessar dados financeiros do cliente (cartão, etc.)
- Página de cadastro específica: `/para-contadores`
- Tracking de comissão: modelo `Comissao` com valor, status, período
- Relatório mensal de comissões (admin)

## Saída esperada

- Modelo `Comissao` no Prisma + migração
- `app/(public)/para-contadores/page.tsx` (landing específica)
- `app/(dashboard)/clientes/page.tsx` (visão do contador)
- `lib/contador.ts` (lógica de permissões e comissão)
- `app/admin/comissoes/page.tsx` (admin)
