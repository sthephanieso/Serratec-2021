// O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno.

const ler = require('prompt-sync')();

var A = ler("Informe a primeira medida: ");
A = A - 0;

var B = ler("Informe a segunda medida: ");
B = B - 0;

var C = ler("Informe a terceira medida: ");
C = C - 0;

var resultado;

if (A == B && B == C){
    resultado = "Equilátero";
    console.log("Seu triângulo é:", resultado);
}
if (A != B && B != C && A != C){
    resultado = "Escaleno";
    console.log("Seu triângulo é:", resultado);
} 

if (A == B && A != C && B != C) {
    resultado = "Isósceles";
    console.log("Seu triângulo é:", resultado);
}