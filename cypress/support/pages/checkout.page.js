const Chance = require("chance");

class CheckoutPage {

    
    

    PAY = '[data-test="checkout"]'
    NAME = '#name'
    EMAIL = '#email'
    SUBMIT = '#submit-payment'

  finalizarCompra() {
    
    const chance = new Chance();
    const nome = chance.name();
    const email = chance.email();



    cy.get(this.PAY).click()
    cy.get(this.NAME).type(nome)
    cy.get(this.EMAIL).type(email)
    cy.get(this.SUBMIT).click()
  }

  validarMensagemSucesso() {
    cy.contains('Thanks for your purchase. Please check your email for payment.')
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(144, 238, 144)')
  }
}

export default new CheckoutPage()