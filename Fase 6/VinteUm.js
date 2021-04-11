//No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. 
//A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.

const ler = require('prompt-sync')();

console.log(":::: 21 DOS AMIGOS NA QUARENTENA ::::\n");

var carta = 0;

while(carta < 21){
    if(carta < 21)
        carta += Number(ler("Digite aqui o valor da carta: "));
    
    if (carta == 21){
        console.log("Você ganhou! Parabéns!");
    }
    else if (carta > 21){
        console.log("Você perdeu! Vitória do carteador!");
    }
}

