const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const linkSobre = document.querySelector('a[href="sobre-a-horbyon.html"]');

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

  // Fecha o menu hamburguer, caso esteja aberto
  navLinks.classList.remove('active');
  hamburger.classList.remove('open');

