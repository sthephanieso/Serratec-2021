//O programa “Compromissos” gerencia a sua agenda do mês. 
//Você pode digitar um compromisso, informando o dia e a descrição do evento, e consultar se existe algum apontamento para determinado dia.
const ler = require ('prompt-sync')();

const LIMITE = 31;
var dia = new Array(LIMITE);

while(agenda != "Nao"){
    
    var diaPessoa = Number(ler("Olá, que dia do mês deseja agendar um compromisso? "));
    var compromisso = ler("O que você quer marcar nesse dia? ");
    var agendamento = diaPessoa + ", " + compromisso;
    
    if(dia.indexOf(agendamento) == -1 && diaPessoa <= 31){
        dia[diaPessoa] = agendamento;
        console.log("Compromisso do dia, " + diaPessoa + " adicionado a Agenda.")
        console.log("O compromisso é: ", compromisso);
    } else if(diaPessoa <= 31) {
        console.log("Você já tem compromisso no dia " + diaPessoa + "!");
        console.log("O compromisso é: ", compromisso);
    } else {
        console.log("Esse dia não existe na agenda!");
    }

    var agenda = ler("Você quer adicionar outro agendamento? (Sim ou Nao) ");

}
