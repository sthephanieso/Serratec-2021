/*16. O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True! */

const prompt = require('prompt-sync')();
var mes = prompt("Mês do seu nascimento: ");
var dia = prompt("Dia do aniversário: ");

var eDeAquario = (dia > 21 && dia < 31 && mes == 01) || (dia < 19 && dia > 1 && mes == 02);

console.log("Você é inteligente? " + eDeAquario);