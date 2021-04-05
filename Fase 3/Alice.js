//22. É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?

//Entrada
const prompt = require('prompt-sync')();
var Compra =prompt("Promoção. Digite o valor da sua compra: ");

//Processamento
var cupom = Math.trunc(Compra / 190);
 
//Saída
console.log("Quantidade de", cupom, "cupom.");

