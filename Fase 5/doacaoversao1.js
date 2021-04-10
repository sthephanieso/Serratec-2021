//10. Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:

//b. Assim que a primeira restrição for atendida, não serão feitas as  perguntas subsequentes. 

console.log("== Banco de Sangue ==", "\n");
const ler = require('prompt-sync')();

var idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = ler("Pesa menos de 50kg: ");
var hepatite = ler("Portador de Hepatite: ");
var malaria = ler("Já teve Malária: ");
var recente = ler ("Fez doação recente: ");

var sangue = !(idade == "Sim" || peso == "Sim" || hepatite == "Sim" || malaria == "Sim" || recente == "Sim");

console.log("[Resultado da triagem]");
console.log("Pode doar sangue? ", sangue);

var porque = "";

if (idade == "Sim") porque = "Abaixo ou acima da idade";
if (peso == "Sim") porque = porque + ", Abaixo do peso";
if (hepatite == "Sim") porque = porque + ", Hepatite";
if (malaria == "Sim") porque += ", Malária";
if (recente == "Sim") porque += ", Doação recente";

console.log("Motivos da restrição:", porque);
