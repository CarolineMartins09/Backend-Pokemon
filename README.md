# Backend-Pokemon
## Enunciado:
Desafio Pokémon Go!</br>
Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.</br>

Esta API deve seguir o mínimo de práticas RESTful e conter listas, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.</br>

---

Consigo fazer?</br>
Diga sim! Só precisa saber (ou aprender agora) um pouco sobre as seguintes tecnologias:</br>

- Conceitos de API RESTful</br>
- Modelagem de dados</br>
- NodeJS</br>
- Algum banco de dados, por exemplo, MySQL, SQL Server, MongoDB, etc...</br>
- git</br>

---

## Migração

<p>Realizado atraves da conversão do arquivo de extensão xlsx  para CSV (valores separados por vírgulas), após foi feito a modelagem do banco de dados para inserir todos os dados por import no MySQL Workbench.</p>

---
## Endpoints:
✅ Buscar Todos Pokemon da tabela</br>
✅ Buscar Todos Pokemon com paginação. Senão passar offset tem 1 como fixo</br>
✅ Busca todos com Type1 com paginação e limite por páginação</br>
✅ Busca todos com Type1 e Type2 com paginação e limite por páginação</br>
✅ Buscar pelo nome</br>
---
## Link Render
[https://case-backend.onrender.com](---RENDER---)

---

### Documentação Postman
[](---LINK AQUI!---)

---

<h3 align="center">⚙️ Instruções para rodar o projeto:</h3>

> O arquivo *requests.rest*, presente na pasta raiz do projeto, contém todos os endpoints com url do deploy disponível online (Render)

Caso queira rodar o projeto localmente, as instruções são:

```
git clone https://github.com/CarolineMartins09/Backend-Pokemon.git

npm install -> para instalar as dependências do projeto

criar um arquivo .env com as informações do seus banco de dados

executar as queries do arquivo queries.sql para criar as tabelas

npm run dev -> para rodar o servidor
Instruções para preencher o arquivo dotenv:
```

criar um arquivo .env na pasta raiz com as seguintes variáveis:

```
    DB_HOST: ,
    DB_USER: ,
    DB_PASSWORD: ,
    DB_DATABASE: ,
```
