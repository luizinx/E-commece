import sqlite3 from "sqlite3";
import path from "path";
const caminhoArq = path.resolve("./src/database/", "database.db");

const db = new sqlite3.Database(caminhoArq);

const pragma = `PRAGMA foreign_keys = ON`;

function enableForeignKey() {
  db.run(pragma, (error) => {
    if (error) console.log("Error in process of creation exec 'pragma'");
  });
}


const Usuarios_SCHEMA = `
CREATE TABLE Usuarios (
    id INT(50) PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
)`;

function CreateTableUsuarios() {
  db.run(Usuarios_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}


const Carrinho_SCHEMA = `
CREATE TABLE Carrinho (
    id INT(50) PRIMARY KEY,
    usuario_id INT(50),
    produto_id INT(50),
    status VARCHAR(50)
)`;

function CreateTableCarrinho() {
  db.run(Carrinho_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}


const Produto_SCHEMA = `
CREATE TABLE Produto (
    id INT(50) PRIMARY KEY,
    titulo VARCHAR(50),
    descricao VARCHAR(50),
    valor FLOAT(50)
)`;

function CreateTableProduto() {
  db.run(Produto_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}



db.serialize(() => {
  enableForeignKey();
  CreateTableUsuarios();
  CreateTableProduto();
  CreateTableCarrinho();
});