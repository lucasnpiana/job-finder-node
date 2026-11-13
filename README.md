# 💼 Job Finder

Um projeto de plataforma de divulgação e busca de vagas na área de tecnologia, desenvolvido como parte dos meus estudos em JavaScript e Node.js.

> **Projeto educacional:** desenvolvido durante minha participação em um bootcamp, como parte do curso **JavaScript do básico ao avançado (c/ Node.js e projetos)**.

## 📌 Sobre o projeto

O Job Finder é uma aplicação web que permite cadastrar, visualizar, pesquisar e excluir oportunidades de emprego na área de tecnologia.

O projeto foi desenvolvido com o objetivo de colocar em prática os conhecimentos adquiridos durante o curso, trabalhando com desenvolvimento back-end, integração com banco de dados, criação de rotas e utilização de templates dinâmicos.

A proposta da plataforma é reunir oportunidades de tecnologia, com foco em vagas de trabalho remoto.

## 🚀 Funcionalidades

- **Cadastro de vagas:** formulário para publicação de novas oportunidades.
- **Listagem de vagas:** exibição dinâmica das vagas cadastradas.
- **Busca de vagas:** pesquisa por título, empresa ou descrição.
- **Visualização individual:** página com informações detalhadas de cada oportunidade.
- **Exclusão de vagas:** possibilidade de remover oportunidades cadastradas.
- **Identificação de novas vagas:** destaque visual para oportunidades marcadas como novas.
- **Interface responsiva:** adaptação da interface para diferentes tamanhos de tela.
- **Modo claro e escuro:** alternância entre temas visuais.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| JavaScript | Linguagem de programação |
| Node.js | Ambiente de execução JavaScript |
| Express | Criação do servidor e gerenciamento de rotas |
| Sequelize | ORM para comunicação com o banco de dados |
| SQLite | Banco de dados |
| Handlebars | Renderização dinâmica das páginas |
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização da interface |
| Bootstrap 5 | Componentes e responsividade |

## 📂 Estrutura do projeto

```text
Projeto com NODE.JS/
│
├── db/
│   ├── app.db
│   └── connection.js
│
├── models/
│   └── Job.js
│
├── routes/
│   └── jobs.js
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── home.handlebars
│   ├── add.handlebars
│   └── job.handlebars
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── img/
│       └── company.png
│
├── app.js
├── package.json
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

Antes de começar, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm (geralmente instalado junto com o Node.js)

### 2. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd "Projeto com NODE.JS"
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
node app.js
```

### 5. Acessar no navegador

Com o servidor iniciado, acesse:

```text
http://localhost:3000
```

## 🖥️ Páginas da aplicação

| Página | Rota | Descrição |
|---|---|---|
| Página inicial | `/` | Exibe as vagas disponíveis e a busca |
| Cadastro de vagas | `/add` | Permite cadastrar uma oportunidade |
| Detalhes da vaga | `/jobs/:id` | Exibe as informações de uma vaga específica |

## 🎯 Objetivos de aprendizagem

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes do ecossistema JavaScript e Node.js, como:

- Criação de servidores utilizando Express.
- Organização de aplicações em rotas, modelos e views.
- Utilização do Sequelize para operações com banco de dados.
- Operações de cadastro, consulta e exclusão de registros.
- Implementação de filtros de pesquisa.
- Renderização de páginas dinâmicas com Handlebars.
- Integração entre front-end e back-end.
- Organização de arquivos e estrutura de projetos.
- Desenvolvimento de interfaces responsivas.

## 📚 Contexto acadêmico

Este projeto faz parte da minha jornada de aprendizado em desenvolvimento web, sendo desenvolvido durante um bootcamp, no curso **JavaScript do básico ao avançado (c/ Node.js e projetos)**.

O objetivo principal é consolidar os conhecimentos adquiridos por meio da prática, desenvolvendo uma aplicação funcional e explorando diferentes tecnologias utilizadas no desenvolvimento de aplicações web.

## 👨‍💻 Autor

Desenvolvido por **Lucas Nickele Piana**.

Projeto criado para fins educacionais e de aprendizado.

---

⭐ Projeto desenvolvido durante meus estudos em JavaScript e Node.js.
