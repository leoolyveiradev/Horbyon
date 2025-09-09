// Esconde o loader depois que a página carregar
window.addEventListener("load", () => {
  const loader = document.getElementById("logo-carregando");
  if (loader) {
    loader.style.display = "none";
  }
});
