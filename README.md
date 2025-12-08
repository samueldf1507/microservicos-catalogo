# 📚 Microserviço: Catálogo de Cursos

Este é o serviço responsável pelo gerenciamento dos cursos na arquitetura de microserviços do projeto **SkillHive** (ou o nome que você escolheu).

## 🚀 Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express** (Framework Web)
* **MongoDB Atlas** (Banco de Dados na Nuvem)
* **Mongoose** (ODM para MongoDB)
* **Dotenv** (Gerenciamento de variáveis de ambiente)
* **Cors** (Segurança de acesso)
* **Render** (Deploy na Nuvem)

## ⚙️ Funcionalidades

* [x] Listar todos os cursos.
* [x] Buscar detalhes de um curso específico (usado pelo serviço de matrículas).
* [x] Cadastrar novos cursos.
* [ ] (Futuro) Atualizar e Deletar cursos.

## 🔗 Links do Projeto

* **Deploy (Produção):** [https://microservicos-catalogo-samuel.onrender.com](https://microservicos-catalogo-samuel.onrender.com)
* **Repositório de Matrículas:** [Link para o outro GitHub aqui]

## Instale as dependências
npm install

## Configure o arquivo.env na raíz
PORT=3001
DATABSE_URL=SuaStringDeConexaoAqui

## Inicie o servidor
npm run dev

Método,Rota,Descrição
GET,/cursos,Lista todos os cursos
GET,/cursos/:id,Busca um curso pelo ID
POST,/cursos,Cria um novo curso
