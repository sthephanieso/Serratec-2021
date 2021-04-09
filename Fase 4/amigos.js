/*12. Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False */

const prompt = require('prompt-sync')();
var amigoUm = prompt("Digite seu número: ");
amigoUm = amigoUm - 0;

var amigoDois = prompt("Digite seu número: ");
amigoDois = amigoDois - 0;

var playerUmVenceu = amigoUm > amigoDois;
var playerDoisVenceu = amigoDois > amigoUm;
var empate = amigoUm == amigoDois;

console.log("=======   Maioral  =======");
console.log("Player 1: " + amigoUm);
console.log("Player 1: " + amigoDois);
console.log("------- Resultados -------")
console.log("Player 1 venceu? " + playerUmVenceu);
console.log("Player 2 venceu? " + playerDoisVenceu);
console.log("Houve empate? " + empate);