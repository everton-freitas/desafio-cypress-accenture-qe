import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que a lista de cafés é solicitada', () =>{
  cy.requisicaoCoffee()
})

Then('a API deve retornar a lista de cafés disponível', () =>{
    cy.validaResponseCoffee()
})