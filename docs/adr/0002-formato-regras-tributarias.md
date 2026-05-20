# ADR-0002 — Formato de regras tributárias: JSON + Zod + TypeScript

**Status:** aceita
**Data:** 2026-05-19
**Decididores:** dev principal

## Contexto

O princípio central do projeto é "regras fiscais são dados, não código". Precisamos de um formato para armazenar alíquotas, cronogramas de transição, tabelas do Simples Nacional, CNAEs especiais, etc. O formato precisa ser:

1. Editável por humano não-técnico (contador)
2. Tipado em tempo de desenvolvimento
3. Validado em runtime (dados podem vir corrompidos ou incompletos)
4. Versionável (git-friendly)
5. Consumível pela engine sem transformação complexa

## Decisão

Usar **JSON para dados** + **TypeScript para tipos** + **Zod para validação em runtime**.

## Alternativas consideradas

- **YAML**: mais legível que JSON para humanos. Rejeitada porque: parsing mais lento, indentation-sensitive causa erros sutis, menos tooling de validação, não tem tipagem nativa.
- **TypeScript puro (objetos `as const`)**: tipagem nativa, zero parsing. Rejeitada porque: não editável por não-dev, mudança de dado = mudança de código = rebuild, difícil de validar em runtime.
- **JSON Schema**: padrão da indústria para validação de JSON. Rejeitada porque: verbose, DX inferior a Zod no ecossistema TS, não gera tipos automaticamente (precisa de codegen).
- **JSON + Zod + TS** (escolhida): JSON é universal e editável; Zod valida e infere tipos (`z.infer<typeof schema>`); TypeScript dá segurança em tempo de desenvolvimento. Melhor combinação de acessibilidade + segurança.

## Consequências

### Positivas
- Contador pode editar JSON sem saber programar
- `z.infer<>` elimina duplicação entre tipo e validação
- Script `validate-rules` pode rodar em CI — erro de dado nunca chega em produção
- JSON é consumível por qualquer ferramenta externa (dashboards, scripts Python, etc.)
- Zod dá mensagens de erro claras quando dado está malformado

### Negativas / trade-offs aceitos
- Zod adiciona ~50KB ao bundle se usado no client (mas engine roda no server, então irrelevante)
- JSON não suporta comentários — usar campo `_meta.descricao` para documentação inline
- Precisa manter schema Zod sincronizado com a estrutura do JSON (mitigado por testes)

### O que precisa ser revisitado
- Quando o produto migrar para regras DB-driven (SaaS maduro), o Zod continua validando, mas a fonte muda de arquivo para query. A interface de carga deve ser abstraída desde o início.

## Referências

- https://zod.dev
- Princípio "regras fiscais são dados" em CLAUDE.md, seção 4.1
