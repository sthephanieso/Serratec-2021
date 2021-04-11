// Na “virada de ano novo”, um mostrador gigante no centro da cidade vai fazer a contagem junto com a galera. A regressiva de 10 segundos termina com o “Feliz ano novo!”.

const ler = require("prompt-sync")();


for(var i = 10; i >= 0; i--){
  console.log("Contagem regressiva: " + i)
  if(i == 0){
    console.log("Feliz Ano Novo!!!!")
  }
}

