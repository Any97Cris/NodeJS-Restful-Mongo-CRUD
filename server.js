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
mongoose.connect('mongodb://localhost/node-crud-api', {
    useMongoClient: true
})

//Configuração da variável app para usar o "bodyParser()"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definir a porta onde será executada a api
var porta = process.env.porta || 8000;


//Rotas da API:
//=========================================================================

//Criando uma instancia das Rotas via Express
var router = express.Router();

router.use(function(req,res,next) {
    console.log("ALgo esta acontecendo aqui");
    next();
});

//Rota de exemplo
router.get('/', (req,res) => {
    res.json({ message: "Bem vindo a no loja XYZ" });
});

//Rota '/produtos' 
router.post('/produtos', (req,res) =>{
    var produto = new Produto;

        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function(error) {
            if(error)
                res.send(`Erro ao tentar salvar o Produto ${error}`);
            
            res.json({ message: "Produto cadastrado com sucesso!" });
        });
})

    

//Definindo um padrão das rotas prefixadas: '/api'
app.use('/api',router);

//iniciando a aplicação
app.listen(porta);
console.log("Iniciando a app na porta " + porta);