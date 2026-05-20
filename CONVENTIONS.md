# CONVENTIONS.md — Convenções do projeto

> Convenções de código, nomenclatura e fluxo de trabalho. Consulte antes de implementar.

---

## Nomenclatura

| Contexto | Idioma | Estilo | Exemplo |
|----------|--------|--------|---------|
| Variáveis/funções de domínio fiscal | pt-BR | camelCase | `calcularSimples`, `faturamentoMensal` |
| Tipos de domínio fiscal | pt-BR | PascalCase | `RegimeTributario`, `MemoriaCalculo` |
| Infra, utilitários, config | en | camelCase/PascalCase | `createClient`, `DatabaseConfig` |
| Arquivos | — | kebab-case | `regime-atual.ts`, `aliquotas-teste-2026.json` |
| Pastas | — | kebab-case | `engine/calculators/regime-atual/` |
| Componentes React | — | PascalCase (arquivo e export) | `SimuladorForm.tsx` |

## Valores e unidades

- **Valores monetários:** sempre em centavos (inteiro). `R$ 1.500,00` → `150000`
- **Alíquotas:** sempre em decimal. `0,1%` → `0.001`, `27,5%` → `0.275`
- **Datas:** ISO 8601. `"2026-01-01"`
- **IDs:** UUID v4 para entidades de banco, nanoid (10 chars) para IDs públicos/URLs

## Git

- **Commits:** Conventional Commits em português
  - `feat: adiciona cálculo do Simples Nacional`
  - `fix: corrige arredondamento no ICMS interestadual`
  - `docs: atualiza lacunas com nova resolução`
  - `refactor: extrai validação de CNAE para módulo`
  - `test: adiciona casos de referência para Lucro Presumido`
- **Branches:** `task/XXX-descricao-curta` (ex: `task/004-regras-tributarias`)
- **Main protegida:** merge apenas via PR com CI verde
- **Sem force push em main**

## Código

- **Sem comentários** por padrão. Só quando o "porquê" não é óbvio.
- **Funções puras na engine:** sem efeitos colaterais, sem I/O, sem Date.now()
- **Erros:** fail fast com mensagem clara. Não engolir exceções silenciosamente.
- **Imports:** paths absolutos com `@/` (ex: `@/engine/calculators/regime-atual`)
- **Exports:** named exports (não default), exceto páginas Next.js

## Testes

- **Framework:** Vitest
- **Nomes de teste:** em português, descritivos do cenário
  - `"calcula Simples Nacional Anexo III para faturamento de R$ 50k/mês"`
- **Organização:** testes ao lado do módulo (`*.test.ts`) ou em `__tests__/`
- **Casos de referência:** imutáveis, validados por fonte legal, nunca alterados sem revisão humana

## UI

- **Mobile-first:** toda tela funciona em 360px
- **Dark como padrão:** class strategy para dark mode
- **Fontes:** Syne (display), DM Mono (números), Inter (corpo)
- **Cor de acento:** lime/neon green
- **Acessibilidade:** contraste AA, navegação por teclado, labels em inputs
