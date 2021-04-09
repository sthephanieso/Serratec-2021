//15. O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.


const ler = require('prompt-sync')();

var A = ler("Informe a primeira medida: ");
A = A - 0;

var B = ler("Informe a segunda medida: ");
B = B - 0;

var C = ler("Informe a terceira medida: ");
C = C - 0;

var triangulo = (A < (B + C) && B < A + C && C < A + B);

console.log("::: É um Triângulo? :::");
console.log("As medidas formam um triângulo? ", triangulo);

