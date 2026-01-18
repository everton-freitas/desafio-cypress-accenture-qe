Cypress.Commands.add('requisicaoCoffee', () => {
  return cy.request({
    method: 'GET',
    url: 'https://coffee-cart.app/list.json'
  }).then(response => {
       Cypress.env('responseData', response)
  })
})

Cypress.Commands.add('validaResponseCoffee', () => {
  const response = Cypress.env('responseData')
  const { status, body } = response

  expect(status).to.eq(200)
  expect(body).to.be.an('array')

  const nomes = body.map(item => item.name)

  expect(nomes).to.include.members([
    'Espresso',
    'Espresso Macchiato',
    'Cappuccino',
    'Mocha',
    'Flat White',
    'Americano',
    'Cafe Latte',
    'Espresso Con Panna',
    'Cafe Breve',
    '(Discounted) Mocha'
  ])
})