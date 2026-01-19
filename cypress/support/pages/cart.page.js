import CoffeePage from "../pages/coffee.page"

class CartPage {


  CART_LIST = 'ul.cart-preview'
  ITEM = '.list-item'
  DELETE = '.delete'
  CABECALHO = '.list-header'
  PRECOS = {
        ESPRESSO: 10,
        ESPRESSO_MACCHIATO: 12,
        CAPPUCCINO: 19,
        MOCHA: 8,
        FLAT_WHITE: 18,
        AMERICANO: 7,
        CAFE_LATTE: 16,
        ESPRESSO_CON_PANNA: 14,
        CAFE_BREVE: 15,
        MOCHA_DISCOUNTED : 4
    }

  abrirCarrinho() {
  cy.contains('a', 'cart').click()
  }

  validarPagina() {
    cy.url().should('include', '/cart')
    cy.contains('a', 'cart')
        .should('have.css', 'color', 'rgb(218, 165, 32)')
  }

  validarQuantidadeItens(amount) {
    cy.get(this.CART_LIST)
        .find(this.ITEM)
        .should('have.length', amount)
  }

  validarValores(...cafesSelecionados) {

  const seletores = [
    ':nth-child(2) > :nth-child(3)',
    ':nth-child(5) > :nth-child(3)', 
    ':nth-child(4) > :nth-child(3)',
    'ul[data-v-8965af83=""] > :nth-child(3) > :nth-child(3)'
  ]


  cafesSelecionados.forEach((cafe, index) => {
    const valorEsperado = this.PRECOS[cafe]
    const seletor = seletores[index] 

    cy.get(seletor)
      .invoke('text')
      .then(texto => {
        const valorTela = Number(texto.replace('$', '').trim())
        expect(valorTela).to.eq(valorEsperado)
      })
  })
}

  removerItens(position) {
        cy.get(this.CABECALHO)
            .parent()
            .find(this.ITEM)
            .eq(position)
            .find(this.DELETE)
            .click()
    }


  atualizarCarrinho(p) {
    this.validarQuantidadeItens(p)
  }
}

export default new CartPage()