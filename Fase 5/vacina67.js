const prompt = require('prompt-sync')();
var idade = prompt("Quantos anos? ");

var resultado;

if (idade == 67) {
    resultado = ("Vacinação hoje");
    console.log("67 anos completos =", resultado);
}

if (idade > 67) {
    resultado =("Por que não vacinou ainda?");
    console.log("Acima de 67 anos =", resultado);
}

else {
resultado = ("Volta semana que vem ");
console.log("Abaixo de 67 anos =", resultado);
}
   
