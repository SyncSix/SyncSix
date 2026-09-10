import CONFIG from "./config.js";

export function atualizarAno() {
  const elemento = document.getElementById("anoAtual");
  if (elemento) {
    elemento.textContent = new Date().getFullYear();
  }
}

export function atualizarLinksGithub() {
  document.querySelectorAll('a[href*="github.com/SyncSix"]').forEach((link) => {
    if (!link.getAttribute("href").includes("/issues/new")) {
      link.setAttribute("href", `https://github.com/${CONFIG.github.org}`);
    }
  });
}
