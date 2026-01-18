import CoffeePage from "../pages/coffee.page"

class CartPage {


  CART_LIST = 'ul.cart-preview'
  ITEM = '.list-item'
  DELETE = '.delete'
  CABECALHO = '.list-header'

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

//    validarValores(cafesSelecionados) {


//     cafesSelecionados.forEach(cafe => {

//     const nomeVisivel = cafe
//         .toLowerCase()
//         .replaceAll('_', ' ')
//         .replace(/\b\w/g, letra => letra.toUpperCase())

//         cy.get('.list-header')
//         .parent()
//         .contains('.list-item', nomeVisivel)    
//         .last()
//         .within(() => {

//             cy.contains('div', '$')
//           .invoke('text')
//           .then(texto => {

//             const valorTela = Number(texto.replace('$', '').trim())
//             const valorEsperado = CoffeePage.PRECOS[cafe]

//             expect(valorTela).to.eq(valorEsperado)
//           })
//       })
//   })
//    }

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