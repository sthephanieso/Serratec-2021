// No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.

const ler = require('prompt-sync')();

var poesia;

while(poesia != "Nao"){ 
  console.log("\n");
  console.log("--------- Nossas poesias ---------");
  console.log("De repente, não mais que de repente");
  console.log("Fez-se de triste o que se fez amante");
  console.log("E de sozinho o que se fez contente.\n");

  poesia = ler("Gostaria de ler novamente? (Sim ou Nao) ");
}


console.log("Obrigado por ler nossas poesias!");