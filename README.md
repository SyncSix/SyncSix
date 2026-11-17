<div align="center">
  <img src="src/images/Logo2 SyncSix sem fundo.png" alt="SyncSix Logo" width="600"/>
</div>

<br>

# SyncSix — Equipe e portfólio de projetos

<div align="center">

[![HTML](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/)

Portfólio institucional da **SyncSix**, uma equipe de seis estudantes de **Desenvolvimento de Software Multiplataforma** da **Fatec Votorantim**. Unimos aprendizado, criatividade e colaboração em projetos acadêmicos, hackathons e desafios tecnológicos.

[Landing Page](https://syncsix.github.io/SyncSix) • [Organização no GitHub](https://github.com/SyncSix)

</div>

---

## Sobre a Landing Page

Este repositório contém o site de apresentação da equipe, seus integrantes, projetos e canais de contato. A página acompanha a trajetória da SyncSix e permite apresentar novas iniciativas com os mesmos componentes visuais.

As seções são Sobre, Equipe, Projetos e Contato. O SITE é um dos projetos apresentados; esta Landing Page não é a aplicação de gestão de estágios.

## Projetos

| Projeto | Contexto e situação |
| --- | --- |
| **SITE — Sistema Integrado de Trabalho e Estágio** | Projeto Integrador acadêmico em desenvolvimento. Propõe organizar documentos, solicitações e o acompanhamento dos processos de estágio da Fatec Votorantim. |
| **Projeto do Hackathon da NASA** | Projeto desenvolvido durante um hackathon relacionado à NASA. Nome oficial do projeto e do evento, edição, desafio, solução, tecnologias, participantes e resultados ainda precisam de confirmação. |
| **Novos projetos em breve** | Espaço reservado a iniciativas futuras; não representa um projeto concluído. |

Capturas de tela, repositórios e demonstrações específicos ainda não foram confirmados. Por isso, os cards usam placeholders e indicações não clicáveis. A menção à NASA é provisória e não implica premiação, parceria ou endosso.

## Tecnologias da Landing Page

- HTML5, CSS3 e JavaScript nativo, organizado em módulos ES.
- CSS compartilhado para cards, botões e seções, com classes no padrão BEM.
- Media queries em 960 px e 640 px para reorganizar a página.
- Fontes IBM Plex Sans e Space Grotesk carregadas pelo Google Fonts, com alternativas locais definidas no CSS.
- SVGs embutidos e imagens da equipe em `src/images/`.

Não há frameworks, gerenciador de pacotes ou etapa de build. É necessário servir os arquivos por HTTP para carregar os módulos JavaScript corretamente.

---

## Estrutura

```
SyncSix/
├── index.html                 # Página principal
├── README.md                  # Este arquivo
│
└── src/
│   ├── images/                # Quatro imagens e logotipos da SyncSix
│   │
│   ├── js/                    # Módulos JavaScript (ES6)
│   │   ├── index.js           # Inicializa os módulos da página
│   │   ├── config.js          # Configuração do GitHub
│   │   ├── menu.js            # Menu responsivo e estados de acessibilidade
│   │   ├── form.js            # Validação de email e formulário
│   │   └── footer.js          # Atualização de ano e links
│   │
│   └── styles/                # Estilos compartilhados
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

## Execução local

Clone o repositório e entre na pasta:

```sh
git clone https://github.com/SyncSix/SyncSix.git
cd SyncSix
```

Com Python 3 instalado, inicie um servidor estático na raiz do projeto:

```sh
python -m http.server 8000
```

Se o executável disponível for `python3`, use `python3 -m http.server 8000`. Também é possível utilizar um servidor HTTP do editor já instalado.

Abra `http://localhost:8000` no navegador. Encerre o servidor com `Ctrl+C`. Abrir `index.html` diretamente por `file://` pode impedir o carregamento dos módulos ES.

## Manutenção

### Integrantes

Edite os seis cards `.membro` de `index.html`, na seção `#equipe`, preservando a ordem e os estilos existentes. Substitua o placeholder de foto somente por uma imagem confirmada, mantendo a classe `.membro__foto` e fornecendo um texto alternativo adequado.

Os perfis ainda não informados usam `span.membro__link`, com rótulos de confirmação pendente. Quando houver uma URL real, substitua o `span` por um link com a mesma classe, nome acessível e, se abrir outra aba, `target="_blank" rel="noopener"`. Não utilize `href="#"` para simular um destino.

### Projetos

Edite ou duplique um `article.projeto` dentro de `.projetos__grid`. Preserve `.projeto__imagem`, `.projeto__conteudo`, título, descrição e área de links. O grid compartilhado acomoda novos cards sem uma quantidade fixa em JavaScript.

Informe nome, objetivo, contexto e situação com dados confirmados. Enquanto faltarem capturas e URLs, mantenha placeholders e textos não clicáveis em `.projeto__links`. Quando os links forem adicionados, confira também o comportamento de `atualizarLinksGithub()` em `src/js/footer.js`: sua regra atual reescreve endereços que contêm `github.com/SyncSix` para a organização, inclusive caminhos de repositórios.

### Identidade e metadados

Preserve logotipos, classes, IDs e a identidade visual aprovada. Atualize título, descrição e Open Graph em `index.html` quando necessário. `og:url` e `og:image` continuam pendentes de uma URL de produção e uma imagem oficiais confirmadas.

Depois de editar, revise desktop, tablet e celular, incluindo 320, 375, 390, 768, 1024 e 1440 px. Confira também o menu mobile, os links, o formulário e o ano automático.

---

## Formulário de contato

O formulário não possui back-end próprio. O fluxo atual é:

1. Validar o e-mail ao sair do campo e ao enviar; a mensagem de erro é removida durante a edição.
2. Abrir a página de criação de uma issue em `https://github.com/SyncSix/SyncSix/issues/new`, com nome, e-mail e mensagem preenchidos.
3. Permitir que o visitante revise e confirme a publicação no GitHub, conforme as permissões do repositório e sua conta.

O clique no formulário não publica uma issue automaticamente. As informações confirmadas na issue podem ficar públicas. Não envie dados pessoais ou confidenciais.

A configuração usa `CONFIG.github.org` e `CONFIG.github.repo` em `src/js/config.js`. Os campos Nome e Mensagem têm o atributo `required`, mas, com `novalidate`, o JavaScript atual valida somente o e-mail. Uma ampliação dessa validação deve ser discutida antes de alterar o fluxo.

---

## Equipe

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

Fotografias, descrições individuais, funções e redes sociais pendentes serão complementadas com informações confirmadas. Os links de GitHub, LinkedIn e portfólio de Matheus Costa já presentes na página foram preservados.

---

## Links

- [Landing Page](https://syncsix.github.io/SyncSix)
- [Organização SyncSix](https://github.com/SyncSix)
- [Repositório de apresentação](https://github.com/SyncSix/SyncSix)

## Pendências

- Fotografias, apresentações individuais, funções e redes sociais ainda não fornecidas.
- Capturas, repositórios e demonstrações dos projetos.
- Identificação completa do projeto e do hackathon relacionado à NASA, participantes e eventuais resultados comprovados.
- URL e imagem oficiais para os metadados Open Graph.
- Definição de uma licença formal: não há arquivo de licença no repositório atual.

---

<div align="center">
  <img src="src/images/Logo SyncSix.jpeg" alt="S6 Ícone" width="100"/>
  <p><i>Sincronia e tecnologia em cada linha de código.</i></p>
</div>
