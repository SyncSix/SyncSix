<div align="center">
  <img src="src/images/Logo2 SyncSix sem fundo.png" alt="SyncSix Logo" width="600"/>
</div>

<br>

# SyncSix — Projeto Integrador

<div align="center">

[![HTML](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/)

Landing page da equipe **SyncSix**, desenvolvida para o Projeto Integrador do curso de **Desenvolvimento de Software Multiplataforma** da **Fatec Votorantim**.

[Visualizar ao vivo](https://syncsix.github.io/SyncSix) • [Sobre o projeto](#-sobre-o-projeto) • [Estrutura](#-estrutura) • [Desenvolvimento](#-desenvolvimento)

</div>

---

## 🎯 Sobre o projeto

A **SyncSix** é uma equipe de seis alunos responsável pelo desenvolvimento de um **site de governança corporativa** para o **Grupo Panna**, integrando conteúdo das seis disciplinas do semestre:

- **Algoritmos** — Lógica de programação e estrutura das funcionalidades
- **Banco de Dados** — Modelagem e armazenamento de informações
- **Desenvolvimento Web** — Construção do front-end e integração
- **Design Digital** — Identidade visual, layout e UX
- **Engenharia de Software** — Requisitos, processo e documentação
- **Sistemas Computacionais** — Infraestrutura e hospedagem

### Tecnologia

- **Sem dependências externas** — HTML, CSS e JavaScript puros
- **Sem ferramentas de build** — Abrir e rodar diretamente no navegador
- **Modular** — Código organizado em módulos ES6 com BEM CSS
- **Responsivo** — Suporte mobile-first, tablet (960px) e desktop
- **Acessível** — Navegação por teclado, foco visível e scroll suave

---

## 📁 Estrutura

```
SyncSix/
├── index.html                 # Página principal
├── README.md                  # Este arquivo
│
├── src/
│   ├── images/               # Imagens e logos
│   │
│   ├── js/                    # Módulos JavaScript (ES6)
│   │   ├── index.js           # Entry point — inicializa a app
│   │   ├── config.js          # Configuração do GitHub
│   │   ├── menu.js            # Menu responsivo (hamburger)
│   │   ├── form.js            # Validação de email e formulário
│   │   └── footer.js          # Atualização de ano e links
│   │
│   └── styles/                # Módulos CSS (BEM methodology)
│       ├── index.css          # Importação centralizada
│       ├── variables.css      # Design tokens (cores, espaçamento, tipografia)
│       ├── globals.css        # Reset e estilos base
│       ├── layout.css         # Container e seções
│       ├── header.css         # Cabeçalho e navegação
│       ├── hero.css           # Seção hero
│       ├── buttons.css        # Componentes de botão
│       ├── cards.css          # Cards e placeholders
│       ├── sections.css       # Seções: sobre, equipe, projetos
│       ├── forms.css          # Formulários e validação
│       ├── footer.css         # Rodapé
│       ├── accessibility.css  # Acessibilidade e animações
│       └── responsive.css     # Media queries
```

---

## 🚀 Desenvolvimento

### Executar localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SyncSix/SyncSix.git
   cd SyncSix
   ```

2. **Abra com um servidor local** (recomendado):
   - **VS Code**: Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), clique direito em `index.html` → "Open with Live Server"
   - **Terminal (Python 3)**: `python3 -m http.server` → acesse `http://localhost:8000`
   - **Terminal (Node.js)**: `npx http-server`

3. Abra `http://localhost:8000` no navegador

### Personalização

Procure por comentários `EDITAR:` no código para encontrar os pontos de customização:

- **Logo e cores** → `src/styles/variables.css` (`:root` contém todos os tokens)
- **Fotos, nomes e bios da equipe** → `index.html` (seção `#equipe`)
- **Links do GitHub** → `src/js/config.js`
- **Projetos realizados** → `index.html` (seção `#projetos`)
- **Open Graph tags** → `index.html` (head, para redes sociais)

---

## 💬 Formulário de contato

O formulário valida email em tempo real e não possui back-end próprio. Ao ser enviado:

1. ✅ Valida o email contra o padrão: `seu@email.com`
2. 📋 Abre uma issue no GitHub com nome, email e mensagem pré-preenchidos
3. 👤 Usuário confirma o envio manualmente na página do GitHub

**Configuração**: Edite `GITHUB_ORG` e `GITHUB_REPO` em `src/js/config.js`

---

### 👥 A Equipe

| Integrante           | Papel / Atuação |
| :------------------- | :-------------- |
| **Guilherme Augusto**| _A definir_     |
| **Leonardo Vinicius**| _A definir_     |
| **Maria Eduarda Fernandes**| _A definir_     |
| **Maria Eduarda Pereira**| _A definir_     |
| **Matheus Costa**| _A definir_     |
| **Rene Dias**| _A definir_     |

---

**Curso:** Desenvolvimento de Software Multiplataforma  
**Instituição:** Fatec Votorantim  
**Semestre:** 2026  
**Cliente:** Grupo Panna

---

## 📄 Licença

Este projeto é desenvolvido como atividade acadêmica. Todos os direitos reservados ao Grupo Panna.

---

<div align="center">
  <img src="src/images/Logo SyncSix.jpeg" alt="S6 Ícone" width="100"/>
  <p><i>Sincronia e tecnologia em cada linha de código.</i></p>
</div>
