export function atualizarAno() {
  const elemento = document.getElementById("anoAtual");
  if (elemento) {
    elemento.textContent = new Date().getFullYear();
  }
}
