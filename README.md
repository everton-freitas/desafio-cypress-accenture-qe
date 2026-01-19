☕ Coffee Cart - Testes Automatizados com Cypress e Cucumber
📖 Descrição do Projeto

Este projeto realiza testes automatizados de ponta a ponta (E2E) e de API para o site Coffee Cart
, utilizando Cypress e Cucumber.
O objetivo é validar:

Funcionalidade de compra de cafés

Aplicação de ofertas promocionais

Quantidade e valores corretos no carrinho

Consistência dos dados exibidos na interface com os dados retornados pela API

O projeto segue boas práticas de Page Object, modularização de step definitions e validação de contratos de API, garantindo robustez e manutenção facilitada.

⚙ Tecnologias e Ferramentas

Cypress: Framework de testes E2E moderno

Cucumber: Gherkin para escrita de features legíveis

JavaScript / Node.js: Linguagem de automação

Page Object Model (POM): Organização de UI e manutenção facilitada

API Testing com cy.request(): Validação de endpoints

Vídeos de execução: Evidência visual dos testes

Git: Controle de versão

🧪 Funcionalidades Testadas
UI (E2E)

Acesso ao site e seleção de cafés

Aplicação de oferta promocional

Validação de quantidade e valores no carrinho

Remoção de itens do carrinho

Finalização de compra e validação da mensagem de sucesso

API

Consumo do endpoint público /list.json

Validação do status HTTP (200)

Confirmação de produtos 

Evidências dos Testes

Os testes são gravados em vídeo, capturando o fluxo completo de execução.

Os vídeos permitem ver:

Seleção de cafés

Aplicação de ofertas promocionais

Validação de carrinho e valores

Finalização de compra

Testes de API sendo executados e validados

🚀 Como Executar os Testes
Pré-requisitos

Node.js >= 18

npm ou yarn

Instalação
git clone https://github.com/everton-freitas/desafio-cypress-accenture-qe

npm install

Rodar UI + E2E (Cypress Open)
npx cypress open

Rodar UI + E2E Headless
npx cypress run
