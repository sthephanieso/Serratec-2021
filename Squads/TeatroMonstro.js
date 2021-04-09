/*
Teatro_do_Monstro:

// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.

*/

//Leitura
const ler = require('prompt-sync')();

//Entrada
var idade = 0;
var sexo = 0;
var h = 0;
var m = 0;
var cadeira = 0;

//Processamento
while(cadeira < 5){
    idade = ler("Qual a sua idade? ");
    if (idade < 16){
        console.log("Você não pode assistir a peça!");
    }
    if(idade >= 16){
        sexo = ler("Digite H (homem) ou M (mulher): ");
        if (sexo == "M") {
            m++;
            cadeira++;
    } else if (sexo == "H"){
        h++;
        cadeira++;
    }
  }  
}


//Saída
console.log("Nessa peça temos:", m, "mulheres e", h, "homens."); 