/*
    Arquivo: produto.js
    Autor: Crisciany Souza
    Descrição: arquivo responsavel onde trataremos o modelo da classe 'Produto'
    Data: 29/03/2022
*/

var mongose = require('mongoose');
var Schema = mongose.Schema;

/*
    Produtos
    id: int
    nome: string
    preco: number
    descricao: string
*/

var ProdutoSchema = new Schema({
    
    nome: String,
    preco: Number,
    descricao: String

});

module.exports = mongose.model('Produtos', ProdutoSchema);