//10. “No abecedário da Xuxa, vamos aprender!” Lembra da música? Então, crie um programa que recebe uma letra maiúscula e canta sua “definição musical”.

const ler = require('prompt-sync')();

var letra = ler("Letra: ");

var resultado;

if (letra == "A" || letra == "a"){
    resultado = "A de amor";
}

if (letra == "B" || letra == "b") {
    resultado = "B de baixinho";
}

if (letra == "C" || letra == "c") {
    resultado = "C de coração";
}
    
if (letra == "D" || letra == "d") {
    resultado = "D de docinho";
}

if (letra == "E" || letra == "e") {
    resultado = "E de escola";
}

if (letra == "F" || letra == "f") {
    resultado = "F de feijão";
}

if (letra == "G" || letra == "g") {
    resultado = "G de gente";
}

if (letra == "H" || letra == "h"){
    resultado = "H de humano";
}
        
if (letra == "I" || letra == "i"){
    resultado = "I de igualdade";
}

if (letra == "J" || letra == "j") {
    resultado = "J de juventude";
}

if (letra == "L" || letra == "l") {
    resultado = "L de liberdade";
}

if (letra == "M" || letra == "m") {
    resultado = "M de molecagem";
}

if (letra == "N" || letra == "n") {
    resultado = "N de natureza";
}

if (letra == "O" || letra == "o"){
    resultado = "O de obrigado";
}

if (letra == "P" || letra == "p"){
    resultado = "P de proteção";
}

if (letra == "Q" || letra == "q"){
    resultado = "Q de quero-quero";
}

if (letra == "R" || letra == "r"){
    resultado = "R de riacho";
}

if (letra == "S" || letra == "s"){
    resultado = "S de saudade";
}

if (letra == "T" || letra == "t"){
    resultado = "T de terra";
}

if (letra == "U" || letra == "u"){
    resultado = "U de universo";
}

if (letra == "V" || letra == "v"){
    resultado = "V de vitória";
}

if (letra == "X" || letra == "x"){
    resultado = "É Xuxa!";
}

if (letra == "Z" || letra == "z"){
    resultado = "Z é zum-zum-zum-zum";
}

console.log(letra);
console.log(resultado);

