import { iniciarMenu } from "./menu.js";
import { iniciarFormularioContato } from "./form.js";
import { atualizarAno, atualizarLinksGithub } from "./footer.js";

function inicializarApp() {
  iniciarMenu();
  iniciarFormularioContato();
  atualizarAno();
  atualizarLinksGithub();
}

document.addEventListener("DOMContentLoaded", inicializarApp);
