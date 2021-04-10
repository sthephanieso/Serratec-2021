//apertar alt + z.

//17. Doar sangue é muito importante. Porém, nem todos podem fazê-lo. Não podem ser doadores os menores, nem portadores de doenças do fígado, tampouco quem já doou nos últimos 3 meses. Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam ‘sim’ para as restrições.

//10. Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:

//a. Alterar a mensagem de resultado, para dizer quais motivos impediram o voluntário de participar da doação (ou parabenizar quando aprovado).

console.log("== Banco de Sangue ==", "\n");
const ler = require('prompt-sync')();

var idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");

    if (idade == "Nao") {
        var peso = ler("Pesa menos de 50kg: "); 

        if (peso == "Nao") {
            var hepatite = ler("Portador de Hepatite: ");

            if (hepatite == "Nao") {
                var malaria = ler("Já teve Malária: ");

                if (malaria == "Nao") {
                    var recente = ler ("Fez doação recente: ");

                    if (recente == "Nao") {
                        var sangue = !(idade == "Sim" || peso == "Sim" || hepatite == "Sim" || malaria == "Sim" || recente == "Sim");

                        console.log("[Resultado da triagem]");
                        console.log("Pode doar sangue? ", sangue);
                    }
                }
            }
        }
    }
