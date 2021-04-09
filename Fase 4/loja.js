//12. O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.

const LIMITE = 10;
const ler = require('prompt-sync')();
var pessoas = ler("Quantas pessoas tem na loja? ");


var autorizado = pessoas < LIMITE;

console.log("Liberado entrar mais pessoas? " + autorizado);