/**
   * Crie um programa que leia um número e o número maximo, e o programa devolve quantos multiplos
   * existem do primeiro número dentro do número maximo.
   */

 const ler = require("prompt-sync")();
 var numero = ler("Digite o número que você que saber os multiplos: ");
 var numero2 = ler("Digite até onde você quer saber o multiplo: ");
 var contador = 0;

 for(var i = 1; i < numero2; i++){
     if( i % numero == 0){
         contador++;
         console.log(i + " é o " + contador + "º multiplo de \ " + numero );
     }
 }

   //SQUAD: DEVS & GAMES