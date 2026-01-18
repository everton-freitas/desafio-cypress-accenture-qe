#utf-8
#language: pt

Funcionalidade: Comprar café com oferta promocional

  Cenario: Realizar compra com aplicação de oferta e pagamento com sucesso
    Dado que o usuário acessa o site "https://coffee-cart.app"
    Quando o usuário seleciona 3 tipos de cafés diferentes
    Então o modal de oferta promocional é exibido
    E o usuário aceita a oferta de "Mocha" por $4
    Então o carrinho deve conter 4 itens com os valores corretos
    Quando o usuário remove 1 item do carrinho
    Então o carrinho deve conter 3 itens atualizados corretamente
    Quando o usuário realiza o pagamento
    Então a mensagem de sucesso da compra deve ser exibida