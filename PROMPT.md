# PROMPT.md — Como instruir o Claude Code nesta base

> Este arquivo serve como referência rápida sobre **como pedir trabalho** ao Claude Code neste projeto.
> Não é uma task. É um guia de uso.

---

## Retomando uma sessão (task já iniciada)

Se você está continuando uma task que já foi parcialmente implementada:

```
Antes de qualquer coisa:

1. Leia CLAUDE.md (raiz)
2. Leia a task em andamento (docs/tasks/task-XXX-*.md)
3. Verifique o estado atual: `git status`, `git log --oneline -5`, `pnpm run typecheck`
4. Liste o que já foi feito e o que falta segundo os critérios de aceitação
5. Continue de onde parou — não refaça o que já está pronto

Se algo que já foi feito está errado ou incompleto, corrija antes de avançar.
```

---

## Quando criar um ADR

Crie um ADR em `docs/adr/` sempre que uma decisão atender pelo menos um destes critérios:

- Difícil de reverter depois (escolha de banco, framework, formato de dado central)
- Afeta múltiplos módulos ou tasks
- Há trade-off real e não-óbvio
- Outra pessoa lendo o código depois vai se perguntar "por que assim?"

Use o template em `docs/adr/0000-template.md`.

---

## O prompt padrão para iniciar uma sessão

Cole isto no início de qualquer sessão nova do Claude Code:

```
Antes de qualquer coisa, leia os seguintes arquivos para se contextualizar:

1. CLAUDE.md (raiz) — princípios e contexto geral
2. README.md (raiz) — visão do produto
3. BACKLOG.md (raiz) — fases planejadas
4. docs/tasks/README.md — filosofia das tasks
5. A task específica que vamos trabalhar agora (docs/tasks/task-XXX-*.md)

Depois de ler:
- Confirme em 2-3 frases o seu entendimento do que precisa ser feito
- Liste as decisões abertas que a task deixou para você resolver
- Para cada decisão aberta, diga qual caminho você pretende seguir e por quê
- Aguarde minha confirmação antes de começar a escrever código

Princípios para esta sessão:
- Pense antes de codar. Não escreva código antes de eu confirmar o plano.
- Faça apenas o que a task pede. Se você ver melhoria fora do escopo, anote em uma lista
  "fora do escopo desta task" mas não execute.
- Se a task estiver ambígua, pergunte. Não invente requisitos.
- Mantenha funções puras quando a engine estiver envolvida.
- Português brasileiro nos nomes de domínio (regimes, tributos). Inglês na infra.
- Se você tomar uma decisão arquitetural significativa, registre em docs/adr/.
```

## Variações do prompt por tipo de task

### Para uma task da engine

Adicione:

```
Esta task envolve a engine de cálculo tributário. Lembre-se:
- Funções puras, sem efeitos colaterais.
- Toda fórmula com comentário citando base legal.
- Valores em centavos (inteiro), alíquotas em decimal.
- Memória de cálculo passo-a-passo na saída.
- Se a regra exata não existir oficialmente, use estimativa COM flag de incerteza.
- Antes de inventar uma alíquota ou tratamento especial, consulte docs/legal/lacunas.md.
```

### Para uma task de UI

Adicione:

```
Esta task envolve interface. Lembre-se:
- Mobile-first absoluto. Teste mental em 360px de largura.
- Estética: dark, near-black de fundo, lime/neon green de acento.
- Fontes: Syne (display), DM Mono (números), Inter (corpo).
- Linguagem do usuário, não do fisco. Traduzir jargão.
- Acessibilidade: navegação por teclado, labels, contraste AA.
- Disclaimer fiscal sempre presente em telas com cálculo.
```

### Para uma task de integração (pagamento, email, WhatsApp)

Adicione:

```
Esta task envolve integração externa. Lembre-se:
- Credenciais em variáveis de ambiente, nunca em código.
- .env.example atualizado com a estrutura (sem valores reais).
- Tratamento de erro: a integração externa vai falhar — defina fallback ou retry.
- Idempotência: chamadas que mudam estado precisam ser idempotentes (ex: webhook de pagamento).
- Logs estruturados sem expor dado sensível.
- Documente o fluxo em docs/ (sequência de chamadas, webhooks esperados, etc.).
```

## Anti-padrões a evitar nas instruções

❌ "Crie um arquivo `pages/api/simulate.ts` com a função `handleSimulate` que..."
   → Você está codando pela máquina. Use a task no formato outcome-oriented.

❌ "Use Zod para validar."
   → Tudo bem como recomendação, mas não como ordem se a task não exige.

❌ "Faça igual a [outro projeto seu]"
   → Claude Code não conhece outros projetos. Se quer aquele padrão, descreva-o.

❌ "Faça isso e mais aquilo e mais aquilo outro"
   → Uma task por mensagem. Quebre em múltiplas se for grande.

## Padrões bons

✅ "A saída precisa ser serializável em JSON e renderizável tanto em SSR quanto em client."
✅ "Considere as alternativas X, Y e Z e decida qual usar. Documente em ADR se a decisão for não-trivial."
✅ "Critério de aceitação: ao rodar `comando X`, vejo `resultado Y`."
✅ "Não toque em arquivos fora de `/engine/` nesta task."

## Quando interromper o Claude Code

Pare a execução se:

- Ele começou a codar antes de você ter confirmado o plano
- Ele inventou um requisito que não está na task
- Ele está tocando em arquivos fora do escopo
- Ele está usando uma biblioteca não-aprovada sem justificar
- Ele está aplicando uma regra fiscal sem citar fonte legal

Use: "para. revisa o plano antes de continuar."

## Checklist de fim de task

Antes de considerar uma task concluída, peça ao Claude Code para verificar:

```
Antes de fechar esta task, confirme:

1. Todos os critérios de aceitação foram atendidos? Liste cada um e o status.
2. Você criou ou modificou algum arquivo fora do escopo declarado? Por quê?
3. Você tomou alguma decisão arquitetural que merece um ADR? Se sim, criou?
4. Os testes (se aplicável) passam? typecheck passa? lint passa?
5. CLAUDE.md ou BACKLOG.md precisa ser atualizado por causa do que você fez?
6. Há alguma "fora do escopo" anotada que vale virar próxima task?
```
