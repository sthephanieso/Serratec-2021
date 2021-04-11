// Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência.

const ler = require("prompt-sync")();

var numero = Number(ler("Digite um número: "));

var acumuladora = 0;

 for(var i = numero; i >= 1; i--){
   console.log(i)
   acumuladora = acumuladora + i;
}

console.log(acumuladora);