//9. No tablet da lanchonete, o cliente agora pode escolher três complementos. E os pedidos também ganharam mais opções!Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito

const ler = require ('prompt-sync')();

console.log("::: Lanchonete :::");
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O=ovo frito", "\n");

var primeiro = ler("Item 1: ")
var msg;
switch (primeiro) {
    case "Q": msg = "queijo,"; break;
    
    case "B": msg = "bacon,"; break;
    
    case "A": msg = "alface,"; break;
    
    case "T": msg = "tomate,"; break;

    case "P": msg = "picles,"; break;
    
    case "C": msg = "cebole,"; break;

    case "O": msg = "ovo frito,"; break;
}

var segundo = ler("Item 2: ");
var mensagem;
switch (segundo) {
    case "Q": mensagem = "queijo,"; break;
    
    case "B": mensagem = "bacon,"; break;
    
    case "A": mensagem = "alface,"; break;
    
    case "T": mensagem = "tomate,"; break;

    case "P": mensagem = "picles,"; break;
    
    case "C": mensagem = "cebola,"; break;

    case "O": mensagem = "ovo frito,"; break;
}

var resultado;

if (primeiro == "A" || 
    primeiro == "T" || 
    primeiro == "P" || 
    primeiro == "C" || 
    segundo == "A" || 
    segundo == "T" || 
    segundo == "P" || 
    segundo == "C" ){
     var molho = ler ("Adicionar molho? ");

     if (molho == "Sim"){
    resultado = "com molho.";
    }
}

else {
    resultado = "sem molho.";
}

console.log("Lanche com", msg, mensagem, resultado);