<div align="center">

# 💼 Job Finder

**Plataforma de divulgação e busca de vagas na área de tecnologia, com foco em trabalho remoto.**

[Sobre](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#tecnologias) •
[Como executar](#como-executar) •
[Autor](#autor)

</div>

---

> 🎓 **Projeto educacional:** desenvolvido durante meu bootcamp, como parte do curso **JavaScript do básico ao avançado (c/ Node.js e projetos)**.

## 📌 Sobre o projeto

O **Job Finder** é uma aplicação web que permite cadastrar, visualizar, pesquisar e excluir oportunidades de emprego na área de tecnologia.

O projeto foi desenvolvido para colocar em prática os conhecimentos adquiridos durante o curso, abrangendo desenvolvimento back-end, integração com banco de dados, criação de rotas e uso de templates dinâmicos.

## 🚀 Funcionalidades

- ✅ **Cadastro de vagas:** formulário para publicação de novas oportunidades.
- 📋 **Listagem de vagas:** exibição dinâmica das vagas cadastradas.
- 🔎 **Busca de vagas:** pesquisa por título, empresa ou descrição.
- 📄 **Visualização individual:** página com informações detalhadas de cada oportunidade.
- 🗑️ **Exclusão de vagas:** remoção de oportunidades cadastradas.
- 🆕 **Destaque para novas vagas:** identificação visual das oportunidades marcadas como novas.
- 📱 **Interface responsiva:** adaptação a diferentes tamanhos de tela.
- 🌗 **Modo claro e escuro:** alternância entre temas visuais.

<a id="tecnologias"></a>

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| JavaScript | Linguagem de programação |
| Node.js | Ambiente de execução JavaScript |
| Express | Servidor e gerenciamento de rotas |
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
│   ├── app.db              # Banco de dados SQLite
│   └── connection.js       # Configuração da conexão (Sequelize)
│
├── models/
│   └── Job.js              # Modelo da entidade Vaga
│
├── routes/
│   └── jobs.js             # Rotas relacionadas às vagas
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars # Layout base
│   ├── home.handlebars     # Listagem e busca
│   ├── add.handlebars      # Cadastro de vagas
│   └── job.handlebars      # Detalhes da vaga
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── img/
│       └── company.png
│
├── app.js                  # Ponto de entrada da aplicação
├── package.json
└── README.md
```

<a id="como-executar"></a>

## ⚙️ Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (instalado junto com o Node.js)
- [Git](https://git-scm.com/)

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/lucasnpiana/NOME_DO_REPOSITORIO.git
```

**2. Acesse a pasta do projeto**

```bash
cd "Projeto com NODE.JS"
```

**3. Instale as dependências**

```bash
npm install
```

**4. Inicie a aplicação**

```bash
node app.js
```

**5. Acesse no navegador**

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

- Criação de servidores com **Express**.
- Organização da aplicação em **rotas, modelos e views**.
- Operações de **CRUD** com **Sequelize** (cadastro, consulta e exclusão).
- Implementação de **filtros de pesquisa**.
- Renderização de páginas dinâmicas com **Handlebars**.
- Integração entre **front-end e back-end**.
- Desenvolvimento de **interfaces responsivas** com Bootstrap.
- Boas práticas de organização de arquivos e estrutura de projetos.

## 🔮 Próximos passos

Ideias de melhorias para as próximas versões:

- [ ] Edição de vagas já cadastradas
- [ ] Autenticação de usuários (empresas e candidatos)
- [ ] Paginação na listagem
- [ ] Filtros por tipo de contrato, senioridade e faixa salarial
- [ ] Validação de formulários no back-end
- [ ] Deploy da aplicação online

## 📚 Contexto acadêmico

Este projeto faz parte da minha jornada de aprendizado em desenvolvimento web, desenvolvido durante um bootcamp no curso **JavaScript do básico ao avançado (c/ Node.js e projetos)**. O objetivo é consolidar o conhecimento por meio da prática, construindo uma aplicação funcional com diferentes tecnologias do ecossistema web.

## 🤝 Contribuições

Sugestões e feedbacks são bem-vindos! Se quiser contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça o commit das alterações (`git commit -m "feat: minha feature"`)
4. Envie para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

<a id="autor"></a>

## 👨‍💻 Autor

**Lucas Nickele Piana**  
Desenvolvedor em formação | JavaScript • Node.js

- 🐙 **GitHub:** [github.com/lucasnpiana](https://github.com/lucasnpiana)
- 💼 **LinkedIn:** [linkedin.com/in/lucasnpiana](https://www.linkedin.com/in/lucasnpiana)
- 📧 **E-mail:** [lucasnickelepiana@gmail.com](mailto:lucasnickelepiana@gmail.com)

## 📝 Licença

Este projeto foi criado para fins educacionais e de aprendizado. Sinta-se à vontade para estudá-lo e usá-lo como referência.

---

<div align="center">

⭐ Se este projeto te ajudou ou te inspirou, deixe uma estrela no repositório!

Feito por [Lucas Nickele Piana](https://github.com/lucasnpiana)

</div>
