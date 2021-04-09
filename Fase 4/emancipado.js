//14. É considerado “Emancipado” qualquer pessoa a partir de 21 anos, ou o indivíduo do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão segundo o ano do seu nascimento.

const prompt = require ('prompt-sync')();
var sexo = prompt("Sexo: ");
var nascimento = prompt("Ano de nascimento: ");
var nascimento = nascimento - 0;
var idade = 2021 - nascimento;

var masculino = sexo == "Masculino" && idade > 18 || sexo == "Feminino" && idade > 21;

console.log("Cidadão emancipado? " + masculino);

