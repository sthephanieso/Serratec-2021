// A loja “Casas Sergipe” vende os seguintes itens:001 Cadeira simples - R$ 100,00 002 Cadeira luxo - R$ 200,00 003 Mesa simples - R$ 450,00 004 Mesa luxo - R$ 900,00 005 Cama - R$ 1500,00 Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.

//O vendedor das Casas Sergipe não pode perder negócio. Por isso, após o item, o sistema pergunta se deseja “Exibir preço com desconto”, que deve abater 5% no valor do produto.

const ler = require('prompt-sync')();

console.log(":::: CASAS SERGIPE ::::");
console.log("Código dos seguintes produtos: \n001 - Cadeira Simples \n002 - Cadeira de luxo \n003 - Mesa Simples \n004 - Mesa de Luxo \n005 - Cama.");

var itens = ler("Digite o código do produto desejado: ");
itens = itens - 0;

var produto;
var mensagem;
var desconto;

if (itens == 001){
    console.log("Cadeira Simples - R$ 100,00");
    produto = ler("Exibir preço de desconto? ");
        if (produto == "Sim"){
            desconto = 100.00 - (100 * 0.05);
            console.log("O produto com desconto é R$", desconto);
    } else {
        console.log("Produto vendido!");
    }
}
if (itens == 002){
    console.log("Cadeira de luxo - R$ 200,00");
    produto = ler("Exibir preço de desconto? ");
        if (produto == "Sim"){
            desconto = 200.00 - (200 * 0.05);
            console.log("O produto com desconto é R$", desconto);
    } else {
        console.log("Produto vendido!");
    }
}

if (itens == 003){
    console.log("Mesa Simples - R$ 450,00");
    produto = ler("Exibir preço de desconto? ");
        if (produto == "Sim"){
            desconto = 450.00 - (450 * 0.05);
            console.log("O produto com desconto é R$", desconto);
    } else {
        console.log("Produto vendido!");
    }
}

if (itens == 004){
    console.log("Mesa de luxo - R$ 900,00");
    produto = ler("Exibir preço de desconto? ");
        if (produto == "Sim"){
            desconto = 900.00 - (900 * 0.05);
            console.log("O produto com desconto é R$", desconto);
    } else {
        console.log("Produto vendido!");
    }
}

if (itens == 005){
    console.log("Cama - R$ 1500,00");
    produto = ler("Exibir preço de desconto? ");
        if (produto == "Sim"){
            desconto = 1500.00 - (1500 * 0.05);
            console.log("O produto com desconto é R$", desconto);
    } else {
        console.log("Produto vendido!");
    }
}
