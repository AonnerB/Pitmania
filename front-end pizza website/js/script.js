// Seleciona o elemento de navegação da barra de cabeçalho
let navbar = document.querySelector('.header .flex .navbar');

// Adiciona um evento de clique ao botão de menu
document.querySelector('#menu-btn').onclick = () => {
   // Alterna a classe 'active' na barra de navegação para mostrar ou ocultar o menu
   navbar.classList.toggle('active');
}

// Seleciona o elemento da conta do usuário
let account = document.querySelector('.user-account');

// Adiciona um evento de clique ao botão do usuário
document.querySelector('#user-btn').onclick = () => {
   // Adiciona a classe 'active' à conta do usuário para exibir a interface da conta
   account.classList.add('active');
}

// Adiciona um evento de clique ao botão de fechar a conta
document.querySelector('#close-account').onclick = () => {
   // Remove a classe 'active' da conta do usuário para ocultá-la
   account.classList.remove('active');
}

// Seleciona o elemento de pedidos
let myOrders = document.querySelector('.my-orders');

// Adiciona um evento de clique ao botão de pedidos
document.querySelector('#order-btn').onclick = () => {
   // Adiciona a classe 'active' aos pedidos para exibir a interface de pedidos
   myOrders.classList.add('active');
}

// Adiciona um evento de clique ao botão de fechar pedidos
document.querySelector('#close-orders').onclick = () => {
   // Remove a classe 'active' dos pedidos para ocultá-los
   myOrders.classList.remove('active');
}

// Seleciona o elemento do carrinho de compras
let cart = document.querySelector('.shopping-cart');

// Adiciona um evento de clique ao botão do carrinho
document.querySelector('#cart-btn').onclick = () => {
   // Adiciona a classe 'active' ao carrinho para exibir a interface do carrinho
   cart.classList.add('active');
}

// Adiciona um evento de clique ao botão de fechar o carrinho
document.querySelector('#close-cart').onclick = () => {
   // Remove a classe 'active' do carrinho para ocultá-lo
   cart.classList.remove('active');
}

// Adiciona um evento de rolagem à janela
window.onscroll = () => {
   // Remove a classe 'active' da barra de navegação, pedidos e carrinho ao rolar a página
   navbar.classList.remove('active');
   myOrders.classList.remove('active');
   cart.classList.remove('active');
};

// Seleciona todos os slides da apresentação
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0; // Inicializa o índice do slide ativo

// Função para avançar para o próximo slide
function next() {
   slides[index].classList.remove('active'); // Remove a classe 'active' do slide atual
   index = (index + 1) % slides.length; // Atualiza o índice para o próximo slide, voltando ao primeiro se necessário
   slides[index].classList.add('active'); // Adiciona a classe 'active' ao próximo slide
}

// Função para voltar ao slide anterior
function prev() {
   slides[index].classList.remove('active'); // Remove a classe 'active' do slide atual
   index = (index - 1 + slides.length) % slides.length; // Atualiza o índice para o slide anterior, indo para o último se necessário
   slides[index].classList.add('active'); // Adiciona a classe 'active' ao slide anterior
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});

// Seleciona todos os botões de remoção
const removeButtons = document.querySelectorAll('.remove-item');

// Adiciona o evento de clique para cada botão
removeButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const itemBox = this.closest('.box'); // Seleciona o elemento .box mais próximo
    itemBox.remove(); // Remove o item do DOM
  });
});
