import CONFIG from "./config.js";

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function exibirErroEmail(inputEmail, mensagem) {
  const erroAnterior = inputEmail.nextElementSibling;
  if (erroAnterior && erroAnterior.classList.contains("form__erro")) {
    erroAnterior.remove();
  }

  inputEmail.classList.add("form__campo-invalido");
  const divErro = document.createElement("span");
  divErro.className = "form__erro";
  divErro.textContent = mensagem;
  inputEmail.parentNode.appendChild(divErro);
}

function removerErroEmail(inputEmail) {
  inputEmail.classList.remove("form__campo-invalido");
  const erro = inputEmail.nextElementSibling;
  if (erro && erro.classList.contains("form__erro")) {
    erro.remove();
  }

  inputEmail.classList.add("form__campo-valido");
  setTimeout(() => {
    inputEmail.classList.remove("form__campo-valido");
  }, 2000);
}

export function iniciarFormularioContato() {
  const form = document.getElementById("formContato");
  if (!form) return;

  const inputEmail = document.getElementById("email");
  if (!inputEmail) return;

  inputEmail.addEventListener("blur", () => {
    const email = inputEmail.value.trim();
    if (!email) {
      exibirErroEmail(inputEmail, "E-mail é obrigatório");
    } else if (!validarEmail(email)) {
      exibirErroEmail(inputEmail, "E-mail inválido. Use: seu@email.com");
    } else {
      removerErroEmail(inputEmail);
    }
  });

  inputEmail.addEventListener("input", () => {
    const erro = inputEmail.nextElementSibling;
    if (erro && erro.classList.contains("form__erro")) {
      inputEmail.classList.remove("form__campo-invalido");
      erro.remove();
    }
  });

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!email || !validarEmail(email)) {
      inputEmail.focus();
      const msg = !email
        ? "E-mail é obrigatório"
        : "E-mail inválido. Use: seu@email.com";
      exibirErroEmail(inputEmail, msg);
      return;
    }

    const titulo = encodeURIComponent(`Contato pelo site: ${nome}`);
    const corpo = encodeURIComponent(
      `**Nome:** ${nome}\n**E-mail:** ${email}\n\n**Mensagem:**\n${mensagem}`,
    );
    const url = `https://github.com/${CONFIG.github.org}/${CONFIG.github.repo}/issues/new?title=${titulo}&body=${corpo}`;
    window.open(url, "_blank", "noopener");
  });
}
