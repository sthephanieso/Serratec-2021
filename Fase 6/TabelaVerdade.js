//O “gerador de tabela verdade” solicita ao aluno de programação qual operador lógico quer visualizar (e, ou), e depois imprime na tela a tabela verdade montada em um laço.

const ler = require("prompt-sync")();

console.log(":::: TABELA VERDADE ::::\n")

do {
    var nro = ler("Digite e ou ou: ");
    if(nro == "e" || nro == "E"){
        console.log("\nP    |   Q  |  (e)");
        console.log("True | True | True");
        console.log("False| False| False");
        console.log("True | False| False");
        console.log("False| True | False\n");
    } else if(nro == "ou" || nro == "OU"){
        console.log("\nP    |   Q   |  (ou)");
        console.log("True | True  | True");
        console.log("False| False | False");
        console.log("False| True  | True");
        console.log("True | False | True\n");
    }


}while(nro != 0);

console.log('\nObrigada por usar o "Gerdador de Tabela"');

