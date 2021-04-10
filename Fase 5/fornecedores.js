//4. O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.

const ler = require('prompt-sync')();

var fornecedores = ler("Valor: ");
fornecedores = fornecedores - 0;

if(fornecedores > 1000) {
       console.log("Pagamento em cheque.")
}

else {
    console.log("Pagamento em dinheiro.")
}
