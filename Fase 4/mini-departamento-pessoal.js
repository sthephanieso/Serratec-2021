/*16. O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
	1. O salário bruto (horas trabalhadas * valor hora)
	2. O valor do desconto para o INSS
	3. O salário líquido (adicionais - descontos).
	4. Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações com formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.*/

const prompt = require('prompt-sync')();
var horas = prompt("Horas trabalhadas mensal: ");
var valor = prompt("Valor recebido por: ");
var salario = Math.round(horas * valor);
var inss = 175;
var liquido = Math.trunc(salario - inss);
console.log("Contracheque:");
console.log("Salário bruto: R$" + salario);
console.log("Valor do desconto do INSS: R$" + inss);
console.log("Salário líquido do funcionário: R$" + liquido);
