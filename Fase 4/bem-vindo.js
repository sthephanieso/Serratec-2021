//12. O programa “bem-vindo” pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta.

const prompt = require('prompt-sync')();
var nome = prompt("Qual o seu nome e sobrenome? ");
console.log("Olá " + nome + ", seja bem vindo ao mundo da programação!");

