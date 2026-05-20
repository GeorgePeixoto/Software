# CLAUDE.md

> Contexto persistente para sessões do Claude Code neste projeto.
> Leia este arquivo antes de qualquer task. Atualize-o quando decisões arquiteturais mudarem.

---

## 1. O que é este projeto

SaaS brasileiro de **simulação e adaptação à Reforma Tributária (IBS/CBS)** voltado a pequenas e médias empresas, com foco inicial na região do Cariri (CE).

A Reforma Tributária (EC 132/2023 + LC 214/2025) cria dois novos tributos sobre consumo — **IBS** (estadual/municipal) e **CBS** (federal) — que substituirão gradualmente ICMS, ISS, PIS e COFINS entre 2026 e 2033. Em 2026 o sistema roda em modo informativo (alíquotas-teste de 0,1% IBS e 0,9% CBS); a partir de 2027 começa a cobrança real.

A maioria das PMEs brasileiras (>5 milhões) ainda não se adaptou. O mercado de software fiscal supera R$10 bilhões. Este produto entra na janela de adaptação.

## 2. Estratégia de produto

O produto é **um único SaaS com três camadas de monetização**:

| Camada | Preço | Função |
|--------|-------|--------|
| Simulador grátis | R$ 0 | Lead magnet público — empresa simula impacto na home, sem cadastro |
| Relatório Premium | R$ 47 (one-shot) | PDF detalhado com projeção 2026→2033, cenários e recomendações |
| Painel SaaS | R$ 149/mês | Dashboard contínuo: monitoramento de alíquotas, alertas, calendário fiscal, suporte WhatsApp |

O simulador grátis é a porta de entrada. Cada simulação captura email + CNPJ → vira lead → upsell pro relatório → upsell pro SaaS.

## 3. Quem usa

- **Persona primária**: dono de PME do Cariri (comércio, alimentação, serviços, indústria pequena). Faturamento entre R$ 30k e R$ 1M/mês. Regime tributário: Simples Nacional, Lucro Presumido ou Lucro Real. Pouco letramento fiscal. Usa WhatsApp como canal principal.
- **Persona secundária**: contador parceiro que atende essas PMEs. Pode ser canal de venda (white-label, comissão).

## 4. Princípios de design e desenvolvimento

Estes princípios valem pra qualquer task. Quando houver dúvida arquitetural, decida pelo princípio.

1. **Regras fiscais são dados, não código.** Alíquotas, datas de transição, regimes especiais, CNAEs com tratamento diferenciado — tudo isso vive em JSON/YAML versionado. Mudança regulatória deve ser editar dado, não recompilar lógica.

2. **A engine de cálculo é o coração e deve ser pura.** Funções determinísticas, sem efeitos colaterais, totalmente testáveis. Recebe entrada, devolve saída. Não conhece HTTP, banco, autenticação.

3. **Multi-tenancy desde o dia 1.** Mesmo o MVP precisa isolar dados por tenant. Não é refatoração futura.

4. **Linguagem do usuário, não do fisco.** Em toda interface, traduzir jargão. "Faturamento mensal" e não "receita bruta operacional". Se um termo técnico for inevitável, explicar inline.

5. **Mobile-first.** Dono de PME do Cariri abre no celular. Toda tela funciona em 360px de largura.

6. **Confiança visual.** Software fiscal precisa parecer sério. Estética dark/terminal (Linear, Vercel) é a referência. Lime/neon green como cor de destaque. Tipografia: Syne (display) + DM Mono (técnica) + Inter (corpo).

7. **Transparência de cálculo.** Toda simulação mostra a memória de cálculo. Empresário e contador precisam entender de onde saiu o número. Caixa-preta destrói confiança.

8. **Disclaimers fiscais sempre presentes.** O produto é informativo. Decisão fiscal final é do contador/empresa. Termo de uso e disclaimers visíveis em toda saída de cálculo.

## 5. Stack técnica (decisões já tomadas)

- **Frontend + Backend**: Next.js 15 (App Router) com TypeScript
- **UI**: Tailwind + shadcn/ui
- **DB**: PostgreSQL + Prisma
- **Auth**: Auth.js (NextAuth v5) ou Clerk — decidir na task de auth
- **Pagamento**: Mercado Pago (primário) + Stripe (futuro)
- **PDF**: a definir (react-pdf vs Puppeteer) — decidir na task do relatório
- **WhatsApp**: Evolution API (já dominado pelo dev)
- **Hospedagem**: Vercel (front) + Railway/Neon (DB)
- **Package manager**: pnpm (lockfile determinístico, mais rápido, workspace-ready)
- **Testes**: Vitest + fast-check (property-based)
- **Monorepo**: não. Single app Next.js. Se crescer, virar monorepo depois.

Decisões abertas (Claude Code pode propor na task correspondente): organização interna da engine, provider de auth.

Decisões já tomadas (registradas em ADRs):
- Package manager: pnpm (ADR-0001)
- Formato de regras tributárias: JSON + Zod + TS types (ADR-0002)
- Multi-tenancy: row-level com `tenantId` (ADR-0003)

## 6. Estrutura de pastas (sugerida, ajustável)

```
/
├── app/                    # Next.js App Router
│   ├── (public)/          # Landing, simulador grátis, resultado
│   ├── (auth)/            # Login, signup
│   ├── (dashboard)/       # Painel SaaS autenticado
│   ├── admin/             # Painel interno (leads, métricas)
│   └── api/               # Routes / Server Actions
├── engine/                # Engine de cálculo (núcleo puro)
│   ├── rules/             # Dados: JSON de alíquotas, CNAEs, transição
│   ├── rules/schemas/     # Schemas Zod para validação dos JSONs
│   ├── calculators/       # Lógica por regime tributário
│   ├── comparators/       # Comparação entre regimes
│   └── types/             # Tipos compartilhados
├── components/            # Componentes UI
│   ├── simulador/         # Componentes do fluxo de simulação
│   └── landing/           # Componentes da landing page
├── content/               # Dados de conteúdo (FAQ, etc.)
├── emails/                # Templates react-email
├── lib/                   # Utilitários (db, auth, payment, etc.)
├── prisma/                # Schema + migrações + seed
└── docs/                  # Documentação viva do projeto
    ├── tasks/             # Tasks numeradas
    ├── adr/               # Architecture Decision Records
    ├── legal/             # Legislação e lacunas
    └── engine/            # Docs técnicos da engine (casos validados)
```

## 7. Fontes legais de referência

Antes de implementar qualquer regra fiscal, validar contra:

- **LC 123/2006** — Lei Geral da Micro e Pequena Empresa (Simples Nacional, anexos I-V, tabelas progressivas)
- **EC 132/2023** — base constitucional da reforma
- **LC 214/2025** — regulamentação principal (alíquotas-teste, transição, fato gerador, base de cálculo)
- **LC 227/2026** — alterações posteriores (período de adaptação, penalidades)
- **Comunicado Conjunto CGIBS/RFB nº 01/2025** — 2026 como ano informativo
- **Ato Conjunto RFB/CGIBS nº 1 de 22/12/2025** — regras de penalidade na transição

URLs oficiais devem ser citadas nos comentários do código quando a regra for sensível.

## 8. Como o Claude Code deve operar neste projeto

- **Pense antes de codar.** Toda task descreve "o quê" e "porquê", não "como". Você decide a implementação.
- **Pergunte se a task estiver ambígua.** Não invente requisitos.
- **Prefira simplicidade.** MVP primeiro, complexidade depois.
- **Não toque em regras fiscais sem validação.** Se uma task envolver mudar alíquota ou lógica de cálculo, sinalize e peça confirmação humana antes.
- **Documente decisões.** Mudança arquitetural significativa → atualizar este CLAUDE.md ou criar ADR em `docs/adr/`.
- **Siga as convenções.** Consulte `CONVENTIONS.md` para nomenclatura, commits, valores e estilo.
- **Português brasileiro em código e comentários** voltados ao domínio fiscal (nomes de regimes, tributos, campos legais). Inglês para infraestrutura e padrões técnicos genéricos.
- **Sem código de exemplo nas tasks.** Se a task disser "implemente X", você decide a forma. Se a task disser "implemente X usando Y", aí Y é restrição.
- **Consulte ADRs antes de propor alternativas.** Decisões já tomadas estão em `docs/adr/`. Não reabra sem motivo forte.

## 9. Status atual

- [ ] Fase 0 — Setup e documentação (em andamento)
- [ ] Fase 1 — Engine de cálculo + Simulador grátis
- [ ] Fase 2 — Relatório Premium pago
- [ ] Fase 3 — Auth + Dashboard SaaS básico
- [ ] Fase 4 — Alertas WhatsApp + Calendário
- [ ] Fase 5 — Polimento, vendas, primeiros clientes

Consultar `BACKLOG.md` para detalhes de cada fase e diagrama de dependências.

## 10. Glossário rápido

- **IBS** — Imposto sobre Bens e Serviços (estadual+municipal, substitui ICMS+ISS)
- **CBS** — Contribuição sobre Bens e Serviços (federal, substitui PIS+COFINS)
- **IS** — Imposto Seletivo (sobre produtos nocivos: cigarro, álcool, etc.)
- **IVA Dual** — Modelo do sistema brasileiro: IBS + CBS funcionam como um IVA, mas administrados em níveis diferentes
- **Alíquota de referência** — Alíquota cheia que entra em vigor gradualmente (a definir oficialmente)
- **Alíquota-teste 2026** — IBS 0,1% + CBS 0,9%, compensável com PIS/COFINS, caráter informativo
- **Cashback** — Devolução de IBS/CBS para famílias de baixa renda (CadÚnico)
- **Split Payment** — Mecanismo onde tributo é separado e recolhido automaticamente no pagamento
- **Regimes especiais** — Setores com regras próprias (saúde, educação, transporte coletivo, Zona Franca, etc.)
- **Período de transição** — 2026 a 2033, com convivência dos dois sistemas
