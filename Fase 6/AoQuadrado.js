//O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.

const ler = require("prompt-sync")();
     
for(var i = 1; i <= 9; i++){
  console.log(i + " ^ 2 " + " = " + i*i);
}

