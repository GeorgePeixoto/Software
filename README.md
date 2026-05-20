# [Nome do Produto a Definir] — Simulador e Painel da Reforma Tributária

> SaaS brasileiro que ajuda PMEs a entender, simular e se adaptar à Reforma Tributária do Consumo (IBS/CBS).

## O problema

A partir de 2026, o sistema tributário brasileiro entra em fase de transição. PIS, COFINS, ICMS e ISS serão gradualmente substituídos por **IBS** (estadual/municipal) e **CBS** (federal) até 2033. Mais de 5 milhões de empresas brasileiras precisam adaptar sistemas, processos e cálculos. A maioria ainda não começou.

## A solução

Um produto único com três camadas:

### 🆓 Simulador Grátis
Empresário entra no site, preenche faturamento + regime atual + CNAE, descobre em segundos qual o impacto da reforma no seu negócio. Sem cadastro.

### 📄 Relatório Premium — R$ 47
PDF detalhado com projeção ano a ano (2026 → 2033), comparativo entre regimes, simulação de cenários ("e se eu mudar pro Lucro Presumido?") e recomendações práticas.

### 📊 Painel SaaS — R$ 149/mês
Dashboard contínuo com:
- Monitoramento de alíquotas aplicáveis ao seu negócio
- Alertas via WhatsApp de mudanças regulatórias
- Calendário de obrigações da transição
- Memória de cálculo transparente
- Suporte humano

## Para quem é

PMEs brasileiras, especialmente do interior do Nordeste, que:
- Faturam entre R$ 30k e R$ 1M/mês
- Estão no Simples Nacional, Lucro Presumido ou Lucro Real
- Não têm departamento fiscal interno
- Precisam de respostas em linguagem clara, não juridiquês

## Stack técnica

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui v2
- PostgreSQL + Prisma
- pnpm (package manager)
- Vitest + fast-check (testes)
- Mercado Pago para pagamento
- Resend + react-email para emails transacionais
- Evolution API para WhatsApp
- Vercel + Neon (DB)
- Plausible (analytics)
- Sentry (error tracking)

## Estrutura do repositório

```
.
├── CLAUDE.md          # Contexto persistente para Claude Code
├── CONVENTIONS.md     # Convenções de código e nomenclatura
├── README.md          # Este arquivo
├── BACKLOG.md         # Backlog completo de fases
├── PROMPT.md          # Guia de como instruir o Claude Code
├── docs/
│   ├── tasks/         # Tasks individuais para Claude Code
│   ├── adr/           # Architecture Decision Records
│   └── legal/         # Anotações sobre legislação tributária
├── app/               # Aplicação Next.js
├── engine/            # Engine de cálculo tributário (núcleo puro)
└── prisma/            # Schema de banco
```

## Como começar

1. Leia `CLAUDE.md` para entender o contexto e os princípios
2. Leia `BACKLOG.md` para ver as fases planejadas
3. Pegue a próxima task de `docs/tasks/` e abra no Claude Code

## Status

🚧 Em desenvolvimento — Fase 0 (setup)

## Aviso legal

Este software fornece informações fiscais com base nas normas vigentes (EC 132/2023, LC 214/2025 e atualizações). É uma ferramenta **informativa e auxiliar**. Decisões fiscais devem ser validadas por profissional contábil ou jurídico habilitado. Não nos responsabilizamos por decisões tomadas exclusivamente com base no software.
