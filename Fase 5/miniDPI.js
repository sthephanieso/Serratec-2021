/*16. O “mini DP” aumentou seus cálculos. Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.
a. Salário base (valor da hora * horas normais)
b. Valor de horas extras
c. Valor do desconto para o INSS
d. Salário líquido (Salário base + horas extras – desconto INSS)
e. Imprimir na tela o contracheque do funcionário. */

const ler = require('prompt-sync')();

var horasN = ler("Horas trabalhadas mensal: ");
var valorH = ler("Valor recebido por: ");

var salario;
var inss = 175;
var liquido;
var extras;

if (horasN > 160){
    salario = Math.round(valorH * 160);
    extras = (horasN - 160) * (valorH * 50/100);
    extras = extras + (valorH * (horasN - 160));
    liquido = salario + extras - inss;
    console.log("Contracheque:");
    console.log("Salário sem hora extra: R$" + salario);
    console.log("Valor do desconto do INSS: R$" + inss);
    console.log("Valor das horas extras: R$" + extras);
    console.log("Salário líquido do funcionário: R$" + liquido);
} else {
    salario = Math.round(valorH * horasN);
    liquido = salario - inss;
    console.log("Contracheque:");
    console.log("Salário bruto: R$" + salario);
    console.log("Valor do desconto do INSS: R$" + inss);
    console.log("Salário líquido do funcionário: R$" + liquido);
}
