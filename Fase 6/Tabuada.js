//Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.

const ler = require("prompt-sync")();
   
var n1 = ler("Qual número você quer? ");

for(i = 1; i <= 10; i++){
    var tabuada = n1 * i
    console.log(n1 + " x " + i + " = " + tabuada);
}