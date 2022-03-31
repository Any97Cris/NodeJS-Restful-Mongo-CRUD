/*
    Arquivo: server.js
    Descrição: 
    Autor: Crisciany Souza
    Data de Criação: 29/03/2022

*/

//Configurar o Setup da App:

//Chamadas dos pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Produto = require('./app/models/produto');

//Configurando Mongo
mongoose.connect('mongodb://localhost:27017/node-crud-api', {
    useMongoClient: true
})

//Configuração da variável app para usar o "bodyParser()"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definir a porta onde será executada a api
var porta = process.env.porta || 8000;

//Criando uma instancia das Rotas via Express
var router = express.Router();

//Rota de exemplo
router.get('/', (req,res) => {
    res.json({ message: "Bem vindo a no loja XYZ" });
});

//Definindo um padrão das rotas prefixadas: '/api'
app.use('/api',router);

//iniciando a aplicação
app.listen(porta);
console.log("Iniciando a app na porta " + porta);