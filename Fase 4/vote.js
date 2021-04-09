/*11. No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
== Eleições 2020 ==
  Digite sua idade: 17
  Você já pode votar? True */

const prompt = require('prompt-sync')();
var vote = prompt("Digite sua idade: ");
vote  = vote - 0;
var eMaiorIdade = vote >= 16;
console.log("Você já pode votar? " + eMaiorIdade);