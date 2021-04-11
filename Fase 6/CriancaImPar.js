// Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).


const ler = require('prompt-sync')();

var escolha = ler("Você quer ver os números pares ou impares? (P ou I) ");

var nro = Number(ler("Escolha um número: "));

var crianca =  0;

while(crianca < nro){

  if(escolha == "P"){
    if(crianca % 2 == 0){
      console.log(crianca + " é par");
      crianca++;
    }
    else
      crianca++;
    }
    if(escolha == "I"){
      if(crianca % 2 == 1){
        console.log(bora + " é impar");
        crianca++;
      }
    else 
      crianca++;
    }
  }
  