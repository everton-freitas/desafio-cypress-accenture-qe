class OfferModal {

    modalText = "It's your lucky day! Get an extra cup of Mocha for $4."


    getModal() {
      return cy.contains("div", this.modalText)
    }

    validarExibicao() {
      this.getModal().should('be.visible')
    }

    aceitarOferta() {
      this.getModal()
        .find('button')
        .contains('Yes, of course!')
        .should('be.visible')
        .and('have.class', 'yes')
        .and('have.css', 'background-color', 'rgb(198, 218, 181)')
        .click()
  }
}

export default new OfferModal()