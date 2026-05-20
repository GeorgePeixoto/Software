# Tasks para Claude Code

> Cada arquivo `task-XXX-*.md` é uma tarefa autocontida para ser executada pelo Claude Code.

## Numeração

Tasks usam **centenas por fase** para permitir inserções sem renumerar:

| Faixa | Fase | Qtd |
|-------|------|-----|
| 000-003 | Fase 0 — Setup | 4 |
| 100-120 | Fase 1 — Engine + Simulador | 21 |
| 200-209 | Fase 2 — Relatório Premium | 10 |
| 300-312 | Fase 3 — Auth + Dashboard | 13 |
| 400-406 | Fase 4 — WhatsApp | 7 |
| 500-506 | Fase 5 — Polimento | 7 |
| **Total** | | **62** |

## Filosofia

Estas tasks são **outcome-oriented**, não prescritivas. Cada task descreve:

- **Contexto** — por que estamos fazendo isso
- **Objetivo** — o resultado esperado, em termos de comportamento/funcionalidade
- **Restrições** — limites que não podem ser violados
- **Critérios de aceitação** — como saber que terminou
- **Considere** — perguntas/decisões abertas que o Claude Code deve resolver

**O que não está nas tasks (de propósito):**

- Código de exemplo (exceto interfaces/tipos quando definem contrato)
- Nomes específicos de funções, variáveis ou arquivos (quando não forem padrão estabelecido)
- Estruturas internas de implementação
- Bibliotecas específicas (exceto quando já decididas no CLAUDE.md ou em ADRs)

O Claude Code tem liberdade para decidir arquitetura interna, nomes, organização de módulos e padrões. Só não pode violar as restrições.

## Tamanho ideal de uma task

Cada task deve ser executável em **1-3 horas** de trabalho. Se uma task parece grande demais, quebre-a. Sinais de task grande demais:

- Mistura UI + modelo de dados + integração externa
- Tem mais de 8 critérios de aceitação
- Toca mais de 3 domínios diferentes
- Precisa de mais de 10 arquivos novos

## Como usar

1. Antes de iniciar qualquer task, leia `CLAUDE.md` e `CONVENTIONS.md` na raiz
2. Pegue a task de menor número que ainda não foi feita (respeitando dependências)
3. Execute. Se tiver dúvida real, pergunte. Não invente requisito.
4. Ao terminar, marque como concluída atualizando `BACKLOG.md`
5. Se durante a task você tomar uma decisão arquitetural significativa, crie um ADR em `docs/adr/`

## Ordem e paralelização

Consulte o diagrama de dependências no `BACKLOG.md` para visualizar o caminho crítico e oportunidades de paralelização.

**Paralelizáveis após task-001:** tasks 002, 003 e 100.
**Paralelizáveis após task-101:** tasks 102, 103, 104, 105.

## Decisões já tomadas (ADRs)

Antes de propor alternativas para algo já decidido, consulte `docs/adr/`:

- ADR-0001: pnpm como package manager
- ADR-0002: Formato de regras tributárias (JSON + Zod + TS)
- ADR-0003: Multi-tenancy row-level com tenantId
