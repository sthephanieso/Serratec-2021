//O programa “Veja os números pares” agora utiliza condições de fluxo e parada.

const ler = require("prompt-sync")();

console.log(":::: Veja os números pares ::::");

var limite = 3;
var pares = 2;
var frase = "";

for(pares; pares < limite; pares = pares + 10){
    console.log(pares, ",", pares + 2, ",", pares + 4, ",", pares + 6, ",", pares + 8, ".");
    
    frase = ler ("Deseja continuar? ");

    if(frase == "Sim"){
        limite = limite + 10;
        continue;
    } else {
        return;
    }
}