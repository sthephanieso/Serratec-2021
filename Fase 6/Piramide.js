//O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console.

const ler = require('prompt-sync')();

var piramide = ler("Altura da piramide: ");
var resultado = "D";
var D = "";

 for(var i = 0; i < piramide; i++){
     D += resultado;
     console.log(D);  
}