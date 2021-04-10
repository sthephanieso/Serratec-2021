//12. Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.

const ler = require('prompt-sync')();
console.log ("== Planos de Sexta ==")
var braya = ler("Está Sol: ");

if (braya == "Sim"){
    console.log("Vai à praia");

    var continua = ler("Continuará na praia? ");
    if (continua == "Sim"){
       console.log ("Lanche.")
        
        var casa = ler("Foi para casa? ");
        if (casa == "Sim"){ 
        console.log ("Assista Ttlevisão e tire um cochilo.");
        }
    }
}

if (braya == "Nao") {
    console.log ("Aproveite para estudar.");

    var feijoada = ler("Em casa? ");
    if (feijoada == "Sim");{
        console.log("Coma Feijoada!");
        
        var almocar = ler ("Pretende fazer algo? ");
        if (almocar == "Sim")
        console.log("Assista televisão e tire um cochilo.")
    }

}
