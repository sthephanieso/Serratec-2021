//17. Doar sangue é muito importante. Porém, nem todos podem fazê-lo. Não podem ser doadores os menores, nem portadores de doenças do fígado, tampouco quem já doou nos últimos 3 meses. Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam ‘sim’ para as restrições.
console.log("== Banco de Sangue ==", "\n");
const ler = require('prompt-sync')();
var idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = ler("Pesa menos de 50kg: ");
var hepatite = ler("Portador de Hepatite: ");
var malaria = ler("Já teve Malária: ");
var doacao = ler ("Fez doação recente: ");

var sangue = idade == "Sim" && peso == "Sim" && hepatite == "Sim" && malaria == "Sim" && doacao == "Sim";

console.log("[Resultado da triagem]");
console.log("Pode doar sangue? ", sangue);