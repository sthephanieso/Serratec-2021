//6 . No sistema “Portão do estádio” a entrada dos torcedores é controlada de forma organizada e pacífica. O sistema solicita o número do bilhete e direciona o torcedor para a arquibancada. Contudo, se algum mal intencionado furar a fila (indicado por um bilhete com número negativo), a entrada por aquele portão é fechada em definitivo, e todos precisarão ser encaminhados para outro portão.

const ler = require('prompt-sync')();
var condicao = true;

while(condicao != false){
    var bilhete = Number(ler("Qual o número do seu bilhete? "));
    if(bilhete < 0){
        console.log("Portão fechado!");
        console.log("Todos precisarão seguir para o outro portão");
        condicao = false;
    } else {
        console.log("Vá para a arquibancada: ", bilhete);
    }
}
 