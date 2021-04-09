//9. O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.

const prompt = require('prompt-sync')();
var A = prompt("Digite um número inteiro: ");
A = A - 0;
var B = prompt("Digite outro número inteiro: ");
B = B - 0;

var igual = A == B;
var diferente = A != B;
var maiorIg = A >= B;
var menorIg = A <= B;
var maior = A > B;
var menor = A < B;

console.log("A é igual a B? " + igual);
console.log("A é diferente de B? " + diferente);
console.log("A é maior ou igual a B? " + maiorIg);
console.log("A é menor ou igual a B? " + menorIg);
console.log("A é maior que B? " + maior);
console.log("A é menor que B? " + menor);



