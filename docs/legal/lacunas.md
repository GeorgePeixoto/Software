# Lacunas legais e estimativas

> Este arquivo lista o que **ainda não está oficialmente definido** na regulamentação da reforma, e como estamos tratando provisoriamente.
> Atualizar sempre que uma norma nova for publicada ou um número for confirmado oficialmente.

**Última revisão geral:** 2026-05-19

---

## Alíquotas de referência (IBS + CBS)

- **Status:** estimadas, não oficiais
- **Valores oficiais conhecidos:** alíquotas-teste 2026: IBS 0,1% + CBS 0,9% (LC 214/2025, arts. 343 e 346)
- **Estimativa central:** total IBS + CBS entre 26% e 28% (faixa divulgada por especialistas do Ministério da Fazenda)
- **Como tratamos:** usar estimativa central de **27,5%** (12,5% IBS + 15% CBS, aproximadamente) com flag de incerteza
- **Quando atualizar:** após Resolução do Senado Federal fixar oficialmente

## Cronograma fino da transição

Conhecido a grandes traços (LC 214/2025), mas o percentual exato de redução do ICMS/ISS ano a ano de 2029 a 2032 ainda tem ajustes possíveis via PLP 16/2025.

- **2026:** IBS 0,1% + CBS 0,9% (informativo, compensável com PIS/COFINS)
- **2027:** CBS substitui PIS+COFINS integralmente; IBS continua 0,1%; Imposto Seletivo entra em vigor
- **2028:** mantém 2027
- **2029 a 2032:** ICMS e ISS reduzem 10% ao ano (90%, 80%, 70%, 60% do valor original); IBS aumenta proporcionalmente
- **2033:** ICMS e ISS extintos; IBS e CBS em alíquota cheia

## Composição da base de cálculo

- **ICMS NÃO entra na base de IBS/CBS** (Art. 12, LC 214/2025) ✓ definido
- **IBS/CBS pode integrar a base de ICMS/ISS de 2027 a 2032** (sujeito a alteração pelo PLP 16/2025) — atenção a mudanças

## Simples Nacional

- **2026:** sem mudanças práticas para o Simples
- **2027:** empresas do Simples destacam IBS e CBS em documentos fiscais
- **Opção pelo regime de créditos:** Simples pode optar por participar do sistema de créditos do IBS/CBS — vantagem para quem vende para empresas não-optantes
- **Lacuna:** mecânica exata da opção e impacto na tabela do Simples ainda em regulamentação

## Regimes diferenciados

A LC 214/2025 lista setores com tratamento diferenciado (alíquota reduzida, crédito presumido, ou regime monofásico). Lista parcial conhecida:

- Saúde
- Educação
- Transporte coletivo de passageiros
- Produtos da cesta básica nacional
- Agropecuária
- Serviços de segurança
- Combustíveis (regime monofásico)
- Cigarro e álcool (Imposto Seletivo, regime específico)

**Tratamento na engine atual:** sinalizar quando aplicável, mas não calcular com precisão para todos. Casos não cobertos retornam aviso pedindo confirmação contábil.

## CNAEs com tratamento especial

- **Status:** lista oficial em construção pelo Comitê Gestor do IBS
- **Como tratamos:** mapeamento parcial dos CNAEs mais comuns para PMEs do Cariri (comércio varejista, alimentação, serviços técnicos)
- **Quando atualizar:** sempre que o Comitê Gestor publicar mapeamentos oficiais

## Cashback

- **Beneficiário:** famílias inscritas no CadÚnico
- **Mecânica:** devolução de % de IBS/CBS pago em consumo essencial
- **Impacto na engine de empresa:** zero direto (cashback é do consumidor final)
- **Impacto futuro no produto:** pode ser relevante para um relatório de marketing/atendimento ao consumidor

## Split Payment

- **Status:** previsto para entrar em vigor gradualmente, com testes em 2026 e operação a partir de 2027
- **Impacto na carga tributária:** zero (não muda o valor, muda quem recolhe)
- **Impacto operacional na empresa:** alto — fluxo de caixa, gestão de pagamentos
- **Como tratamos:** relatório premium e SaaS explicarão; engine de cálculo não precisa modelar para o valor

## Penalidades na transição

- **Período de adaptação:** Ato Conjunto RFB/CGIBS nº 1 (22/12/2025) — sem penalidades por erro/omissão no preenchimento de campos de IBS/CBS até o primeiro dia do quarto mês após publicação do regulamento dos tributos
- **Mecanismo corretivo:** auto de infração por descumprimento de obrigação acessória → intimação para regularizar em 60 dias → atendimento extingue penalidade (LC 227/2026)

## Mudanças pendentes a monitorar

- **PLP 16/2025** — alterações sobre composição de base de cálculo
- **Resolução do Senado** — alíquotas de referência oficiais
- **Regulamento do IBS** (Comitê Gestor) — operacionalização
- **Regulamento da CBS** (Receita Federal) — operacionalização
