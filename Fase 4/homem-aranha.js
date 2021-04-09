//13. Essa frase tornou-se famosa no filme Homem-Aranha, e tem relação com o trabalho do programador: “Com grandes poderes, vêm grandes responsabilidades.”. Você irá criar essa frase fazendo *uma atribuição nova* para cada caractere. No editor de código, separe as palavras em seções para facilitar a leitura (deixar uma linha em branco entre as palavras). Você pode criar quantas variáveis quiser, contudo, lembre que cada letra será atribuída em uma nova linha.Dica: Observe que uma das palavras se repete na frase. Será que conseguimos escrevê-la sem “copiar e colar”?

var com = String.fromCharCode(67, 111, 109);
var grandes = String.fromCharCode(103, 114, 97,	110, 100, 101, 115);
var poderes = String.fromCharCode(112, 111, 100, 101, 114, 101, 115, 44);
var vem = String.fromCharCode(118, 234, 109);
var responsabilidades = String.fromCharCode(114, 101, 115, 112, 111, 110, 115, 97, 98, 105, 108, 105, 100, 97, 100, 101, 115, 46);

console.log(com + " " + grandes + " " + poderes + " " + vem + " " + grandes + " " + responsabilidades);
