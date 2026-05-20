# Task 405 — Chatbot FAQ: fluxo básico

**Fase:** 4 — WhatsApp e automação
**Épico:** 4.3
**Dependências:** task-401

## Contexto

Muitas perguntas dos clientes são repetitivas: "quando começa a reforma?", "meu regime muda?", "como funciona o IBS?". Um chatbot simples responde as mais comuns e encaminha para humano quando não sabe.

## Objetivo

Chatbot baseado em keywords que responde perguntas frequentes sobre a reforma tributária.

## Restrições

- Não usar IA/LLM para respostas (custo alto, risco de alucinação fiscal)
- Matching por keywords/intenções simples (regex ou lista de termos)
- Se não reconhecer: "Não entendi. Vou encaminhar para nosso time. Responderemos em até 24h."
- Respostas baseadas no mesmo conteúdo do FAQ da landing (task-119)
- Horário de atendimento humano: seg-sex 8h-18h (fora disso, só bot)

## Critérios de aceitação

- Função `processarMensagem(texto)` que retorna resposta ou null (encaminhar)
- Pelo menos 10 intenções mapeadas (baseadas no FAQ)
- Menu inicial quando cliente manda "oi" ou "menu": lista de opções numeradas
- Resposta a cada opção com texto curto + link para mais detalhes no site
- Se não reconhecer após 2 tentativas: encaminhar para humano
- Mensagens do bot marcadas como tipo "bot" no banco
- Flag `encaminhadoParaHumano` quando bot não resolve
- Teste: enviar "quando começa a reforma" → receber resposta correta

## Saída esperada

- `lib/chatbot/processador.ts`
- `lib/chatbot/intencoes.ts` (mapeamento keyword → resposta)
- `lib/chatbot/respostas.ts` (textos das respostas)
- Integração com webhook de recebimento (task-401)
