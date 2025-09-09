// Fade-in quando carrega a página
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });
});

// Carrossel
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

showSlide(current);

// Modal do trailer
const openBtn = document.getElementById("openTrailer");
const modal = document.getElementById("trailerModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => modal.style.display = "block");
closeBtn.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
