//18. No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, 
//separados por vírgula e na mesma linha.
//A frase termina com ponto, não com vírgula. 
//Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc).

const ler = require("prompt-sync")();

console.log(":::: Veja os números pares ::::");

var i = 2;
var continuar;
var frase = "";

while(continuar != "Nao"){//10

    if(i % 10 == 0){
        frase = frase + i + ".";
        console.log(frase);
        continuar = ler("Deseja continuar? ");
        frase = frase + "\n";
    } else {
        frase = frase + i + ", ";
    }
    i = i+2; 
}