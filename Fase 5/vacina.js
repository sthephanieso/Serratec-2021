//8. A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
const ler = require('prompt-sync')();
var paciente = ler("Paciente: ");
var vacinado = ler("Vacinado: ");

var resultado;

if (vacinado == "Nao") { 
    resultado = true; 
}
else {
    resultado = false;
}

console.log("[Triagem]")
console.log("Sujeito a infecção? ", resultado);
