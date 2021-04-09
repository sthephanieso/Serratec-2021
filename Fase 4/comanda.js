//15. O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.

const prompt = require ('prompt-sync')();
var precoKilo = prompt("Qual o preço do quilo? R$ "); 
precoKilo = precoKilo - 0;
var gramasRefeicao = prompt("Qual o total em gramas da refeição? "); 
var taraPrato = 465; 
gramasRefeicao = gramasRefeicao - 465;
var precoCemGramas = precoKilo / 10; 
var valorTotalAPagar = gramasRefeicao * (precoCemGramas / 100); 

console.log("\n Restaurante Bico de Pato");
console.log("Aqui está a sua etiqueta:");
console.log("Tara do prato: " + taraPrato + "g");
console.log("Preço de 100g: R$" + precoCemGramas);
console.log("Peso consumido: " + gramasRefeicao + "g");
console.log("Valor Total: R$" + valorTotalAPagar);