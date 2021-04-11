//No sistema “Todas as tabuadas”, o aluno de matemática não precisa escolher o número: As tabuadas entre 2 e 10 serão impressas de uma vez.

const ler = require("prompt-sync")();

var tabuada


for(i = 2; i <= 10; i++){

    tabuada = 2 * i;
    console.log("\n2" + " x " + i + " = " + tabuada);

    tabuada = 3 * i
    console.log("3" + " x " + i + " = " + tabuada);

    tabuada = 4 * i
    console.log("4" + " x " + i + " = " + tabuada);

    tabuada = 5 * i
    console.log("5" + " x " + i + " = " + tabuada);

    tabuada = 6 * i
    console.log(6 + " x " + i + " = " + tabuada);

    tabuada = 7 * i
    console.log(7 + " x " + i + " = " + tabuada);

    tabuada = 8 * i
    console.log(8 + " x " + i + " = " + tabuada);

    tabuada = 9 * i
    console.log(9 + " x " + i + " = " + tabuada);

    tabuada = 10 * i
    console.log(10 + " x " + i + " = " + tabuada);

}