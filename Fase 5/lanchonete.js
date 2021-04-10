//7. No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha.

const ler = require ('prompt-sync')();

console.log("::: Lanchonete :::");
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles", "\n");

var lanchonete = ler("Item 1: ");
var primeiro;

if (lanchonete == "Q") primeiro = "queijo,";
if (lanchonete == "B") primeiro = "bacon,";
if (lanchonete == "A") primeiro = "alface,";
if (lanchonete == "T") primeiro = "tomate,";
if (lanchonete == "P") primeiro = "picles,";

var complemento = ler("Item 2: ");
var segundo;

if (complemento == "Q") segundo = "queijo,";
if (complemento == "B") segundo = "bacon,";
if (complemento == "A") segundo = "alface,";
if (complemento == "T") segundo = "tomate,";
if (complemento == "P") segundo = "picles,";

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

console.log("[Cozinha]");
console.log("Lanche com", primeiro, segundo, resultado);