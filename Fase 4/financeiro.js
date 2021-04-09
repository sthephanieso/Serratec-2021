//14. O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo.Para escrever as mensagens, utilize variáveis com concatenação de strings. O valor será escrito separadamente (no console.log).

const prompt = require('prompt-sync')();
var nome = prompt("Qual o seu nome? ");
var empresa = prompt("Qual o nome da sua empresa? ");
var funcao = prompt("Qual a sua função na empresa? ");
var valor = prompt("Qual o valor desejado do empréstimo? ");
var credito = "R$" + valor * 0.86;
console.log("Senhor(a) " + nome + ", você está com sorte!");
console.log("Pela sua função de " + funcao + ", e sua excelente relação com a empresa onde trabalha, foi aprovado um crédito em sua conta corrente de", credito);

