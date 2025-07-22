// Seleciona o botão hamburguer e o menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique no hamburguer
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // abre/fecha o menu
  hamburger.classList.toggle('open');  // anima o ícone
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  });
});
