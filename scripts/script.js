const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const linkSobre = document.querySelector('a[href="sobre-a-horbyon.html"]');
const logoCarregando = document.getElementById('logo-carregando');

// Controle do menu hamburguer
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Fecha o menu ao clicar em qualquer link, exceto no "Sobre"
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link !== linkSobre) {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    });
  }
});

// Animação da logo carregando ao clicar em "Sobre"
linkSobre.addEventListener('click', event => {
  event.preventDefault();

  // Fecha o menu hamburguer, caso esteja aberto
  navLinks.classList.remove('active');
  hamburger.classList.remove('open');

  // Mostra a logo girando no centro da tela
  logoCarregando.style.display = 'flex';

  // Após 1.5 segundos redireciona para a página "Sobre"
  setTimeout(() => {
    window.location.href = linkSobre.href;
  }, 1500);
});
