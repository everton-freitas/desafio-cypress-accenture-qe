class CoffeePage {

    CAFES = {
        ESPRESSO: '[data-cy="Espresso"]',
        ESPRESSO_MACCHIATO: '[data-cy="Espresso_Macchiato"]',
        CAPPUCCINO: '[data-cy="Cappuccino"]',
        MOCHA: '[data-cy="Mocha"]',
        FLAT_WHITE: '[data-cy="Flat_White"]',
        AMERICANO: '[data-cy="Americano"]',
        CAFE_LATTE: '[data-cy="Cafe_Latte"]',
        ESPRESSO_CON_PANNA: '[data-cy="Espresso_Con Panna"]',
        CAFE_BREVE: '[data-cy="Cafe_Breve"]'
    } 

     selecionarCafes(...cafes) {

    cafes.forEach(cafe => {
      cy.get(this.CAFES[cafe]).click()
        })

    }
}

export default new CoffeePage()