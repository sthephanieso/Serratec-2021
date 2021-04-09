/*
CATRACA:

A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:
Quantas pessoas ja entraram no onibus até o momento; 
Se a pessoa é pagante ou entra com gratuidade;
O total dos ganho até o momento (Considerando a passagem a R$ 4,40).

*/

//Leitura
const ler = require('prompt-sync')();

//Entrada
var pago = 0;
var gratis = 0;
var total = 0;
const VALOR = 4.40;

//Processamento
for(var i = 0; i < 5; i++){
    var pass = ler("Tem gratuidade? (Sim ou Nao) ");
    if(pass == "Sim"){
        gratis++;
        console.log("Gatruidade adicionado.");
    } else {
        pago++;
        console.log("Pagante adicionado.");
    }
    console.log("Tem", i, "passageiros no ônibus.");
}

//Saída
total = pago * VALOR;
console.log("O lucro total é:", total);