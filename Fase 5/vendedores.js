//11. Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.

const ler = require('prompt-sync')();
console.log("::: Comissão :::")

var vendas = Number(ler("Qual o valor total da sua venda: "));


var comissao = vendas * 0.05;
var adicional;

console.log ("Sua comissão:", comissao);

if(vendas > 5000) {
       adicional = (vendas - 5000) * 0.09
       console.log ("Valor adicional:", adicional)
}
