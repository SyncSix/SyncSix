export function iniciarMenu() {
  const botao = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (!botao || !nav) return;

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}
