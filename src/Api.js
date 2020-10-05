//Importando express
const express = require('express');

//Variavel do projeto

const api = express();

//metodo get -> quero buscar uma informação na api
//parametros no metodo get -> rota, função(request,response)
api.get('/api', (buscar , enviar) =>{
//retornar informação para cliente
//return enviar.send('Vida Longa ao Farlen')
//padrão de retorna da aí atual é JSON
//duas estruturas basica  para retorno -> array [] , ou objeto {}
return enviar.json([{Nome: "Farlen", Preço: "R$ Incalculavel"},
{Nome: "Carro Aleatorio Popular",Preço: "R$ 30.000"},
{Nome: "Avião Militar",Preço: "R$ 3.000.000.000"},
{Nome: "Jatinho",Preço: "R$ 1.300.000"},
{Nome: "Jogo AAA",Preço: "R$ 200"},
{Nome: "Jogo Indie",Preço: "R$ 2"},
{Nome: "Genshim Impact",Preço: "R$ 0"},
{Nome: "League of Legends",Preço: "R$ 0"},
{Nome: "Amigo Traiçoeiro",Preço: "R$ 0,00001"},
{Nome: "Amigo Confiavel",Preço: "R$ incalculavel"},
{Nome: "Console nova geração",Preço: "R$ 5000"},
{Nome: "Pc Batata",Preço: "R$ 1000"},
{Nome: "Pc Fraco",Preço: "R$ 3000"},
{Nome: "Pc Mediano",Preço: "R$ 5000"},
{Nome: "Pc Forte",Preço: "R$ 9000"},
{Nome: "Pc Ideal",Preço: "R$ 20000"}
])});

//definir porta de comunicação para a api

api.listen('3100', () => {
    console.log("React 1 Porta 3100 Rodando...🍃");
});
//codigo para inicializar
//nodemon src/Api
//link para o locall host correto
//http://localhost:3100/api