//6. O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.

const ler = require('prompt-sync')();

var visita = ler("Visitas: ");
var msg;

switch(visita) {
    case "1":
        msg = "Você já nos visitou uma vez.";
        break;
    
    case "2":
        msg = "Você já nos visitou duas vezes.";
        break;
    
    default:
        msg = "Você já nos visitou " + visita + " vezes.";
        break;
}

console.log ("Uau!", msg);
