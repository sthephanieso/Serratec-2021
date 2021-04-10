// A loja “Casas Sergipe” vende os seguintes itens:001 Cadeira simples - R$ 100,00 002 Cadeira luxo - R$ 200,00 003 Mesa simples - R$ 450,00 004 Mesa luxo - R$ 900,00 005 Cama - R$ 1500,00 Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.

const ler = require('prompt-sync')();

console.log(":::: CASAS SERGIPE ::::");
console.log("Código dos seguintes produtos: \n001 - Cadeira Simples \n002 - Cadeira de luxo \n003 - Mesa Simples \n004 - Mesa de Luxo \n005 - Cama.");

var itens = ler("Digite o código do produto desejado: ");
itens = itens - 0;
var mensagem;

switch(itens){
    case 001:
        mensagem = "Cadeira Simples - R$ 100,00";
        break;
    
    case 002:
        mensagem = "Cadeira de luxo - R$ 200,00";
        break;

    case 003:
        mensagem = "Mesa Simples - R$ 450,00";
        break;

    case 004:
        mesagem = "Mesa de luxo - R$ 900,00";
        break;

    case 005:
        mensagem = "Cama - R$ 1500,00";
}

console.log(mensagem);