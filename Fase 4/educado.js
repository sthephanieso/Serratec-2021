//11. O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.
const prompt = require('prompt-sync')();
var nome = prompt("Qual o seu nome? ");
var chamado = prompt("Como gostaria de ser chamado? ");
console.log("Olá " + nome);
console.log("Daqui pra frente irei te chamar de " + chamado);