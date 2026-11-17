export function iniciarMenu() {
  const botao = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (!botao || !nav) return;

  const modoMobile = window.matchMedia("(max-width: 640px)");

  function atualizarEstado(aberto) {
    nav.classList.toggle("aberto", aberto);
    nav.inert = modoMobile.matches && !aberto;
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute(
      "aria-label",
      aberto ? "Fechar menu de navegação" : "Abrir menu de navegação",
    );
  }

  botao.addEventListener("click", () => {
    atualizarEstado(!nav.classList.contains("aberto"));
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      atualizarEstado(false);
    });
  });

  modoMobile.addEventListener("change", () => atualizarEstado(false));
  atualizarEstado(false);
}
