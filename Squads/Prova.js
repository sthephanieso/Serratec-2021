/**
 * A professora passou uma prova para seus alunos de Multipla escolha com 2 tentativas, prevalece a maior nota.
 * Prova multipla escolha, 2 tentativas, prevalece maior nota
 */

 const ler = require("prompt-sync")();

 var gabarito = ler("Qual é o gabarito da prova? ");

 var prova1 = ler("Primeira questão, A B C D ? ");
 var prova2 = ler("Segunda questão, A B C D ? ");
 var prova3 = ler("Terceira questão, A B C D ? ");
 var prova4 = ler("Quarta questão, A B C D ? ");
 var prova5 = ler("Quinta questão, A B C D ? ");

 var pontos = 0;

 if(gabarito.charAt(0) == prova1)
   pontos++;
 if(gabarito.charAt(1) == prova2)
   pontos++;
 if(gabarito.charAt(2) == prova3)
   pontos++;
 if(gabarito.charAt(3) == prova4)
   pontos++;
 if(gabarito.charAt(4) == prova5)
   pontos++;

 console.log("Você conseguiu " + pontos + " pontos");

   //SQUAD: DEVS & GAMES