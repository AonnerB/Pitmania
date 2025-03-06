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

accordion.forEach(acco => {
   acco.onclick = () => {
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});

// Seleciona todos os botões de remoção
const removeButtons = document.querySelectorAll('.remove-item');

// Adiciona o evento de clique para cada botão
removeButtons.forEach(button => {
   button.addEventListener('click', function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link
      const itemBox = this.closest('.box'); // Seleciona o elemento .box mais próximo
      itemBox.remove(); // Remove o item do DOM
   });
});


// Função para alternar entre as abas
document.querySelectorAll('.tab-btn').forEach(button => {
   button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Remove a classe ativa de todas as abas
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      // Adiciona a classe ativa à aba clicada e ao conteúdo correspondente
      button.classList.add('active');
      document.querySelector(`.tab-content.${targetTab}`).classList.add('active');
   });
});

// Define a primeira aba como ativa ao carregar a página
document.querySelector('.tab-btn[data-tab="pizza"]').click();

let cartCount = 0; // Contador de itens no carrinho

// Atualiza o contador no ícone do carrinho
function updateCartCount() {
   document.getElementById('cart-count').textContent = `(${cartCount})`;
}

// Mostra o carrinho
document.getElementById('cart-btn').addEventListener('click', function () {
   document.querySelector('.shopping-cart').style.display = 'block';
});

// Fecha o carrinho
document.getElementById('close-cart').addEventListener('click', function () {
   document.querySelector('.shopping-cart').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
   const cartItems = document.getElementById("cart-items");
   let cartCount = 0;

   function updateCartCount() {
      document.getElementById("cart-count").textContent = cartCount;
   }

   document.querySelectorAll("form").forEach(form => {
      form.addEventListener("submit", function (event) {
         event.preventDefault(); // Impede o envio do formulário

         // Pega as informações do produto do próprio card
         const box = this.closest(".box");
         const produto = box.querySelector(".name").textContent;
         const preco = parseFloat(box.querySelector(".price span").textContent);
         const quantidade = box.querySelector(".qty").value;
         const imgSrc = box.querySelector("img").src;

         // Cria a estrutura do item no carrinho
         const itemCarrinho = document.createElement("div");
         itemCarrinho.classList.add("box");
         itemCarrinho.innerHTML = `
               <a href="#" class="fas fa-times remove-item"></a>
               <img src="${imgSrc}" alt="">
               <div class="content">
                   <p>${produto} <span>( R$${preco} x ${quantidade} )</span></p>
                   <form action="" method="post">
                       <input type="number" class="qty" name="qty" min="1" value="${quantidade}" max="100">
                       <button type="submit" class="fas fa-edit" name="update_qty"></button>
                   </form>
               </div>
           `;

         // Adiciona o item ao carrinho
         cartItems.appendChild(itemCarrinho);

         // Atualiza o contador de itens no carrinho
         cartCount += parseInt(quantidade);
         updateCartCount();

         // Adiciona funcionalidade de remover item
         itemCarrinho.querySelector(".remove-item").addEventListener("click", function (e) {
            e.preventDefault();
            itemCarrinho.remove();
            cartCount -= parseInt(quantidade);
            updateCartCount();
         });
      });
   });
});
