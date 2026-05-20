# BACKLOG

> Backlog de alto nível organizado por fases. Cada fase tem épicos. Cada épico tem tasks (em `docs/tasks/`).
> Ordem das fases é sequencial — uma fase começa quando a anterior tem critério de saída atendido.
> **Numeração:** centenas por fase (0xx, 1xx, 2xx...) para permitir inserções sem renumerar.

---

## Diagrama de dependências (Fase 0 + 1)

```
000 (git+CI)
 │
 ▼
001 (bootstrap)
 │
 ├─────────────────┬──────────────────┐
 ▼                 ▼                  ▼
002 (DB)       003 (design)      100 (tipos/schemas)
 │                 │                  │
 │                 │            ┌─────┼─────┐
 │                 │            ▼     ▼     ▼
 │                 │          101   102   (101 para 103-105)
 │                 │            │     │
 │                 │            └──┬──┘
 │                 │               ▼
 │                 │         103, 104, 105 (regimes)
 │                 │               │
 │                 │               ▼
 │                 │             106 (dispatcher)
 │                 │               │
 │                 │         ┌─────┴─────┐
 │                 │         ▼           ▼
 │                 │       107 (IBS)   (106 para 107)
 │                 │         │
 │                 │         ▼
 │                 │       108 (série) → 109 (diferenciados)
 │                 │         │
 │                 │         ▼
 │                 │       110 (comparador)
 │                 │         │
 │                 │    ┌────┴────┐
 │                 │    ▼         ▼
 │                 │  111 (ref) 112 (prop+CI)
 │                 │    │
 │            ┌────┘    │
 │            ▼         ▼
 │     113 (modelo) ← 002
 │            │
 │            ▼
 │    114 (form) ← 003
 │            │
 │            ▼
 │    115 (resultado) ← 110
 │            │
 │            ▼
 │         116 (compartilhável)
 │            │
 └────────────┤
              ▼
           117 (lead) → 118 (email)
              │
              ▼
           119 (landing)
              │
              ▼
           120 (deploy)
```

**Caminho crítico:** 000→001→100→101→103→106→107→108→110→115→116→117→119→120

**Paralelizáveis após 001:** tasks 002, 003 e 100 podem ser feitas em paralelo.
**Paralelizáveis após 101:** tasks 102, 103, 104, 105 podem ser feitas em paralelo.

---

## Fase 0 — Setup e fundação (4 tasks)

**Objetivo:** Repositório pronto, ambiente configurado, dependências instaladas, primeira página renderizando.

**Critério de saída:** `pnpm dev` sobe um Next.js com landing placeholder, banco conectado, lint e typecheck passando.

### Épicos e tasks
- **0.0** Git + CI mínima → `task-000`
- **0.1** Bootstrap Next.js + TS + Tailwind + shadcn/ui + Vitest → `task-001`
- **0.2** PostgreSQL + Prisma + Docker + Tenant → `task-002`
- **0.3** Design system (dark, lime, fontes, tokens) → `task-003`

---

## Fase 1 — Engine de cálculo + Simulador grátis (21 tasks)

**Objetivo:** Visitante anônimo simula impacto da reforma na home e recebe resultado básico na tela. Lead capturado em banco.

**Critério de saída:** Engine testada cobrindo Simples/Presumido/Real, simulador público funcional, lead salvo no banco, deploy em Vercel acessível por URL.

### Épicos e tasks

**1.1 — Regras tributárias como dados**
- `task-100` Tipos TypeScript e schemas Zod
- `task-101` Dados JSON (alíquotas, cronograma, regimes)
- `task-102` CNAEs e setores diferenciados

**1.2 — Engine regime atual**
- `task-103` Simples Nacional (Anexos I-V)
- `task-104` Lucro Presumido
- `task-105` Lucro Real
- `task-106` Dispatcher unificado

**1.3 — Engine regime novo**
- `task-107` Cálculo IBS/CBS por ano
- `task-108` Série temporal 2026→2033
- `task-109` Regimes diferenciados e Simples pós-2027

**1.4 — Comparador**
- `task-110` Comparador de regimes e projeção

**1.5 — Testes**
- `task-111` Testes unitários (casos de referência)
- `task-112` Testes de propriedade (fast-check) + CI

**1.6 — UI do simulador**
- `task-113` Modelo Prisma SimulacaoResultado
- `task-114` Formulário multi-step (3 passos)
- `task-115` Tela de resultado + gráfico Recharts
- `task-116` Resultado compartilhável (nanoid + rota)

**1.7 — Captura de lead**
- `task-117` Modelo Lead + server action + Turnstile
- `task-118` Email transacional (Resend + react-email) + admin

**1.8 — Landing e deploy**
- `task-119` Landing page + SEO + páginas legais
- `task-120` Deploy em produção (Vercel + Neon + Sentry)

---

## Fase 2 — Relatório Premium pago (10 tasks)

**Objetivo:** Lead converte em comprador. Paga R$ 47, recebe PDF detalhado por email.

**Critério de saída:** Fluxo de checkout funcionando ponta a ponta com Mercado Pago, PDF gerado e enviado em até 2 minutos após confirmação de pagamento.

### Épicos e tasks

**2.1 — Pagamento**
- `task-200` Mercado Pago: setup + checkout Pix
- `task-201` Mercado Pago: checkout cartão + webhook
- `task-202` Modelo Prisma de pagamento + status

**2.2 — Geração do PDF**
- `task-203` Template base (react-pdf)
- `task-204` Conteúdo dinâmico (dados da simulação)

**2.3 — Entrega**
- `task-205` Envio do PDF por email após pagamento
- `task-206` Página de download (link temporário)

**2.4 — Conversão**
- `task-207` Página de upsell pós-simulação
- `task-208` Cupom de desconto
- `task-209` Dashboard interno de conversão (admin)

---

## Fase 3 — Autenticação + Dashboard SaaS (13 tasks)

**Objetivo:** Cliente cria conta, assina mensal, acessa painel privado com simulações salvas, monitoramento contínuo e calendário fiscal.

**Critério de saída:** Signup → assinatura recorrente ativa → painel funcional com múltiplos CNPJs por usuário, monitoramento de alíquotas e calendário de obrigações renderizando.

### Épicos e tasks

**3.1 — Autenticação**
- `task-300` Setup Clerk (signup, login, recuperação)
- `task-301` Middleware de proteção de rotas

**3.2 — Onboarding**
- `task-302` Cadastro de empresa (CNAE, regime, UF)
- `task-303` Múltiplos CNPJs por conta

**3.3 — Assinatura**
- `task-304` Assinatura recorrente Mercado Pago
- `task-305` Webhook + status + retry

**3.4 — Dashboard**
- `task-306` Layout base (sidebar, header, navegação)
- `task-307` Visão geral (métricas, gráfico resumo)
- `task-308` Simulações salvas (histórico + re-simular)

**3.5 — Monitoramento**
- `task-309` Alíquotas aplicáveis ao tenant
- `task-310` Calendário de obrigações fiscais

**3.6 — Gestão**
- `task-311` Gestão de assinatura (cancelar, faturas)
- `task-312` Middleware Prisma de tenant

---

## Fase 4 — WhatsApp e automação (7 tasks)

**Objetivo:** Cliente recebe alertas no WhatsApp sobre prazos e mudanças. Suporte por WhatsApp via Evolution API.

**Critério de saída:** Pelo menos 3 tipos de alerta automatizado entregues por WhatsApp para clientes ativos.

### Épicos e tasks

**4.1 — Integração**
- `task-400` Evolution API: setup + envio básico
- `task-401` Evolution API: recebimento + webhook

**4.2 — Alertas**
- `task-402` Alerta de mudança regulatória
- `task-403` Lembrete de obrigação fiscal
- `task-404` Alerta de vencimento de assinatura

**4.3 — Chatbot**
- `task-405` Chatbot FAQ (fluxo básico)
- `task-406` Painel de mensagens (admin)

---

## Fase 5 — Polimento, vendas e crescimento (7 tasks)

**Objetivo:** Produto vendável. Primeiros 20 clientes pagantes. Validação de mercado.

**Critério de saída:** 20 assinantes ativos a R$ 149/mês ou 200 compras do relatório premium.

### Épicos e tasks

**5.1 — Experiência**
- `task-500` Onboarding guiado in-app (tour)
- `task-501` Página de cases e depoimentos

**5.2 — Crescimento**
- `task-502` Programa de indicação (referral)
- `task-503` Canal contábil (white-label simplificado)

**5.3 — Infraestrutura**
- `task-504` Métricas de produto (funil, retenção, churn)
- `task-505` Otimização de performance
- `task-506` Preparação para escala

---

## Backlog descongelado (ideias futuras)

Não priorizadas, mas registradas:

- **Emissão de NF-e adaptada** (via integração com PlugNotas/Tecnospeed) — só faz sentido depois de 100+ clientes
- **Plugin/integração com ERPs populares** (Bling, Conta Azul, Omie)
- **Modo white-label completo** para escritórios contábeis revenderem
- **Versão mobile nativa** (React Native ou PWA otimizado)
- **Comparador entre regimes** com simulação avançada de mudança de regime
- **Módulo de cashback** para empresas que tenham clientes elegíveis
- **API pública** para integradores
- **Marketplace de contadores parceiros** para empresas sem contador

---

## Critérios gerais de priorização

Quando surgir nova ideia, avalie:

1. Encurta caminho até primeira receita?
2. Resolve dor concreta de cliente já existente?
3. É desbloqueador de outras features?
4. Tem risco regulatório ou de responsabilidade civil?

Se item 1 ou 2 = sim e item 4 = baixo, priorizar.
