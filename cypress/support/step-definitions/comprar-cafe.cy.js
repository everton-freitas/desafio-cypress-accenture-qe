import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import CoffeePage from "../pages/coffee.page"
import CartPage from "../pages/cart.page"
import ModalPage from "../pages/modal.page"
import CheckoutPage from '../pages/checkout.page'

Given('que o usuário acessa o site "https://coffee-cart.app"', () => {

  cy.visit('/')

})

When('o usuário seleciona 3 tipos de cafés diferentes', () => {

  const cafes = ['ESPRESSO', 'CAPPUCCINO', 'AMERICANO']

  Cypress.env('cafesSelecionados', cafes)

  CoffeePage.selecionarCafes(...cafes)

})

Then('o modal de oferta promocional é exibido', () => {

  ModalPage.validarExibicao()

})

And('o usuário aceita a oferta de "Mocha" por $4', () => {

  ModalPage.aceitarOferta()

})

Then('o carrinho deve conter 4 itens com os valores corretos', () => {

  const cafesSelecionados = Cypress.env('cafesSelecionados')
  
  CartPage.abrirCarrinho()
  CartPage.validarPagina()
  CartPage.validarQuantidadeItens(4)
  CartPage.validarValores('MOCHA_DISCOUNTED', ...cafesSelecionados)

})

When('o usuário remove 1 item do carrinho', () => {

  CartPage.removerItens(3)

})

Then('o carrinho deve conter 3 itens atualizados corretamente', () => {

    CartPage.atualizarCarrinho(3)
})

When('o usuário realiza o pagamento', () => {

  CheckoutPage.finalizarCompra()

})

Then('a mensagem de sucesso da compra deve ser exibida', () => {

  CheckoutPage.validarMensagemSucesso()
  
})