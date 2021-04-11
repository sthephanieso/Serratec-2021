// O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas. Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda.

var par = 0;
var impar = 0;

for(var i = 0; i < 1000; i++){
  var random = Math.trunc(Math.random() * 10);
  if(random == 0){
      par++;
    }
     else if(random % 2 == 0){
      par++;
    }
    else if(random % 2 == 1){
      impar++;
    }
 }

 console.log("O Percentual de Par: " + par);
 console.log("O Percentual de Impar: " + impar);