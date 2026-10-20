# Calculadora de Proposta · The Seller

Página única (`index.html`) para montar propostas comerciais do The Seller.
Abra o arquivo no navegador — não precisa de build nem servidor.

## Etapas

1. **Dados do cliente** — empresa, responsável, contatos, plano (Launch, Scale, Prime; valor editável para desconto) e Gestão Estratégica opcional (mensal).
2. **Setup** — escopo padrão de ativação já preenchido (editável, com itens extras) e valor único.
3. **Usuários, dispositivos e agentes de IA adicionais** — seção recolhida; recorrente mensal.
4. **Implantação de Agentes de IA** — lista de agentes, valor único por agente.
5. **Implantação de Automações** — lista de automações, valor único.
6. **Integrações** — valor de implantação e, opcionalmente, manutenção mensal.

O resumo lateral mostra recorrência mensal, implantação (com parcelamento e desconto),
total do 1º mês e projeções. Botões: **Gerar PDF** (proposta formatada para impressão),
**Copiar resumo** (texto pronto para WhatsApp/e-mail) e **Copiar tabela** (para Excel/Sheets).

Os dados ficam salvos no navegador (localStorage). Preços padrão estão no topo do `<script>`
(`PLANS`, `ADDONS`, `LISTS`, `SETUP_DEFAULT`); o valor padrão da Gestão Estratégica fica em `defaultState()`.

## Página de links (bio do Instagram)

Em `links/` — veja `links/README.md`.
