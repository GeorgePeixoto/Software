# Task 100 — Regras tributárias: tipos TypeScript e schemas Zod

**Fase:** 1 — Engine de cálculo
**Épico:** 1.1
**Dependências:** task-001

## Contexto

Antes de popular dados, precisamos definir a estrutura que os sustenta. Esta task cria os tipos TypeScript e schemas Zod que representam todas as regras tributárias do sistema. É a fundação tipada sobre a qual tasks 101 e 102 vão popular dados.

## Objetivo

Tipos e schemas para: alíquotas (atuais e novas), cronograma de transição, regimes tributários, CNAEs, setores diferenciados. Inclui o campo `_meta` padrão e o campo `vigencia`.

## Restrições

- Arquivos em `/engine/types/` (tipos) e `/engine/rules/schemas/` (Zod)
- Usar `z.infer<>` para derivar tipos dos schemas (single source of truth)
- Alíquotas em decimal, valores em centavos, datas ISO 8601
- Nenhum dado real nesta task — apenas estrutura

## Critérios de aceitação

- Schema Zod `MetaSchema` para campo `_meta` (versao, fonteLegal, ultimaAtualizacao, descricao)
- Schema Zod `VigenciaSchema` para campo `vigencia` (inicio, fim nullable)
- Schemas para: `AliquotaTesteSchema`, `CronogramaTransicaoSchema`, `RegimeAtualSchema`, `CnaeEspecialSchema`, `SetorDiferenciadoSchema`
- Tipos TypeScript inferidos e exportados de `/engine/types/index.ts`
- `pnpm typecheck` passa sem erros
- Zod instalado como dependência

## Saída esperada

- `/engine/types/index.ts`
- `/engine/rules/schemas/index.ts` (re-exporta todos)
- `/engine/rules/schemas/meta.ts`
- `/engine/rules/schemas/aliquotas.ts`
- `/engine/rules/schemas/cronograma.ts`
- `/engine/rules/schemas/regimes.ts`
- `/engine/rules/schemas/cnaes.ts`
- `/engine/rules/schemas/setores.ts`
