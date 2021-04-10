//14. A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo número.

const ler = require('prompt-sync')();

var primeiro = Number(ler("Primeiro Número: "));
var sinal = ler("Um sinal: ");
var segundo = Number(ler ("Segundo número: "));


var resultado;

if (sinal == "+") {
    resultado = primeiro + segundo;
}

if (sinal == "-") {
    resultado = primeiro - segundo;
}

if (sinal == "*") {
    resultado = primeiro * segundo;
}

if (sinal == "/") {
    resultado = primeiro / segundo;
}

console.log ("Seu resultado é:", resultado);