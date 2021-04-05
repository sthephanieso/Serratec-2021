//26. O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.

const prompt = require('prompt-sync')();
var mili = prompt("Qual a sua quantidade em mililitros? ");
var alcool = mili * 0.7;
var gel = mili * 0.3;
console.log("O seu álcool em gel será composto de " + alcool + "ml de álcool e com " + gel + "ml de gel.");

