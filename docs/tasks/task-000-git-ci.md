# Task 000 — Inicialização do repositório Git + CI mínima

**Fase:** 0 — Setup e fundação
**Épico:** 0.0
**Dependências:** nenhuma

## Contexto

Antes de qualquer código, o repositório precisa existir com estrutura Git, proteções de branch e um pipeline mínimo de CI. Isso garante que desde o primeiro commit de código (task-001) já existe validação automática.

## Objetivo

Repositório Git inicializado com a documentação atual commitada, GitHub Actions configurado para lint e typecheck, e branch protection ativa na main.

## Restrições

- Repositório no GitHub (privado inicialmente)
- Branch principal: `main`
- Sem commits diretos na main — apenas via PR
- CI roda em todo PR aberto contra main

## Critérios de aceitação

- `git log` mostra primeiro commit com toda a documentação atual (CLAUDE.md, README.md, BACKLOG.md, PROMPT.md, CONVENTIONS.md, docs/)
- `.github/workflows/ci.yml` existe com jobs de lint e typecheck (vão falhar até task-001 criar o app — isso é esperado, o workflow deve ter `paths` filter ou rodar apenas quando `package.json` existir)
- `.gitignore` configurado para Node.js, Next.js, .env, IDE files
- `README.md` não foi alterado
- Branch protection configurada: require PR, require CI pass (quando aplicável), no force push

## Considere

- Avalie se vale configurar Dependabot ou Renovate para atualizações automáticas de dependências. Recomendação: Renovate (mais configurável). Pode ser adicionado depois se preferir não complicar agora.
- Decida se vale criar labels no GitHub para as tasks (ex: `fase-0`, `fase-1`, `engine`, `ui`). Útil para organização visual.
- `.github/CODEOWNERS` pode esperar — por enquanto é um dev solo.

## Saída esperada (artefatos)

- Repositório Git com histórico limpo
- `.github/workflows/ci.yml`
- `.gitignore`
- Branch protection ativa
