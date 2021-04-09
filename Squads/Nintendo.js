/**
 * A Nintendo está sorteando um Switch para 2 primeiras pessoas que acertar a palavra que apareceu durante a Nintendo Direct.
Cada pessoa tem uma chance, se a pessoa errar pula pro próximo.
   A palavra chave é: "Nintendo131".

*Nintendo sorteia switch pra 2 pessoas, 1 chance, palavra chave Nintendo131
 */

 const ler = require("prompt-sync")();

 var vencedor = 0;
 while(vencedor < 2){
   var jogador = ler("Qual a senha especial? ");
   if(jogador == "Nintendo131"){
       console.log("Parabéns, você ganhou!");
       vencedor++;
   }
   else
       console.log("Infelizmente você errou!");
  

 }

   //SQUAD: DEVS & GAMES