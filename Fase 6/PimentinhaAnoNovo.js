// 11. Pimentinhas para a virada de ano:
// 1. É possível fazer o mesmo programa sem a inversão do laço?
// 2. E se ao invés de números, a contagem fosse exibida em texto?



for(var i = 0; i <= 10; i++){
    var contagem = 10;
    contagem = contagem - i;
  
    switch (contagem) {
      case 10:
        console.log("Contagem regressiva: Dez");
        break;
      case 9:
        console.log("Contagem regressiva: Nove");
        break;
      case 8:
        console.log("Contagem regressiva: Oito");
        break;
      case 7:
        console.log("Contagem regressiva: Sete");
        break;
      case 6:
        console.log("Contagem regressiva: Seis");
        break;
      case 5:
        console.log("Contagem regressiva: Cinco");
        break;
      case 4:
        console.log("Contagem regressiva: Quatro");
        break;
      case 3:
        console.log("Contagem regressiva: Três");
        break;
      case 2:
        console.log("Contagem regressiva: Dois");
        break;
      case 1:
        console.log("Contagem regressiva: Um");
        break;
      case 0:
        console.log("Contagem regressiva: Zero");
        break;
    
      default:
        break;
    }
    if(contagem == 0) {
      console.log("Feliz ano novo");
    }
  }