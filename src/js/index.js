import { iniciarMenu } from "./menu.js";
import { iniciarFormularioContato } from "./form.js";
import { atualizarAno } from "./footer.js";

function inicializarApp() {
  iniciarMenu();
  iniciarFormularioContato();
  atualizarAno();
}

document.addEventListener("DOMContentLoaded", inicializarApp);
