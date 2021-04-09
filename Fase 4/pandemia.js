//13. Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

const prompt = require('prompt-sync')();
var mascara = prompt("Usa mascará? ");
var temperatura = prompt("Qual a temperatura? ");
var entrada = temperatura <= 37.5 && mascara == "Sim";

console.log("Usa máscara: " + mascara);
console.log("Temperatura: " + temperatura);
console.log("Autorizar a entrada? " + entrada);


