# docs/

Documentação viva do projeto. Atualize conforme o projeto evolui.

## Estrutura

```
docs/
├── tasks/        # Tasks para Claude Code (uma por arquivo, numeradas)
├── adr/          # Architecture Decision Records (decisões importantes registradas)
├── legal/        # Anotações sobre legislação tributária, lacunas, fontes
└── engine/       # Documentação técnica da engine (casos validados, etc.)
```

## ADRs existentes

- **ADR-0001** — pnpm como package manager
- **ADR-0002** — Formato de regras tributárias (JSON + Zod + TS)
- **ADR-0003** — Multi-tenancy row-level com tenantId

## Quando criar um ADR

Sempre que uma decisão atender pelo menos um destes critérios:

- Difícil de reverter depois (escolha de banco, framework, formato de dado central)
- Afeta múltiplos módulos
- Há trade-off real e não-óbvio
- Outra pessoa lendo o código depois vai se perguntar "por que assim?"

Use o template em `adr/0000-template.md`.

## Quando atualizar `legal/`

Sempre que:

- Uma nova norma é publicada que afeta o cálculo
- Uma estimativa vira número oficial
- Um contador valida ou refuta um caso da engine
- Você identifica uma lacuna (regra ainda não implementada)

Sempre adicionar data de atualização ao modificar `legal/lacunas.md`.
