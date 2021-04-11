// O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.

const ler = require('prompt-sync')();

console.log(":::: CARA OU COROA GENTIL ::::\n");
//Entrada
var escolha = ler("Escolha entre cara ou coroa: "); //perguntar sua escolha

//Processamento
var vence = false;
var contadorJogadas = 0;

//Jogar a moeda
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

while(vence != true) {
    contadorJogadas++;

    var moeda;
    if (getRandomInt(1,3) == 1){
        moeda = "coroa";
    } else {
        moeda = "cara";
    }
    if(moeda == escolha){
        vence = true;
        console.log("Você venceu! Deu: " + moeda + " na " + contadorJogadas + "ª jogada.")
    } else {
        console.log(contadorJogadas + " ª " + "Jogada: " + moeda);
    }
}
