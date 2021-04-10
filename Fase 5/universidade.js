//9. Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
const ler = require('prompt-sync')();
var dia = ler("Dia hoje: ");
var boleto = ler("Número do boleto: ");
var pagamento = Number(ler("Dia de pagamento: "));


var desconto;

if (pagamento >= 10 && pagamento <= 13) {
    desconto = true;
}
else {
    desconto = false;
}

console.log("Extrado do boleto:", boleto);
console.log("Dia hoje:", dia);
console.log("Dia de pagamento:", pagamento);
console.log("Desconto na próxima mensalidade?", desconto);