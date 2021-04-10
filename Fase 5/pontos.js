//5. Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

const ler = require('prompt-sync')();

var provaUm = ler("Qual a sua nota da P1? ");
provaUm = provaUm - 0;
var provaDois = ler("Qual a sua nota da P2? ");
provaDois = provaDois - 0;

var total = provaUm + provaDois;
var resultado;

if (total >= 0 && total <= 4) {
    resultado = "Reprovado";
}

if (total >= 4 && total <= 6) {
    resultado = "Recuperação";
}

if (total >= 6 &&  total <= 8) {
    resultado = "Aprovado";
}

if (total >= 8 && total <= 10) {
    resultado = "Destaque";
}

console.log("Sua situação na disciplina é:", resultado);