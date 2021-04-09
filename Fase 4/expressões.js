/*10. Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;mod: resto; <>: diferenteDica: Para algumas operações será necessário o uso de parênteses.
	1. x - y M a
	2. x - y * a M c mod y
	3. y <> c
	4. x * y <> c
	5. c mod y mi y mod c
	6. a m b
	7. z / a + x * y - 5 MI b
	8. c * z + 2 = a * x + y
	9. c = z + b
	10. y * 2 <> 7 - b */

//Entrada
var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;

//Processamento
var A = (x - z) > a;
var B = x - (y * a) > (c % y);
var C = y != c;
var D = (x * y) != c;
var E = (c % y) <= (y % c);
var F = a < b;
var G = (z / a) + (x * y) - 5 >= b;
var H = (c * z) + 2 == (a * x) + y;
var I = c == z + b;
var J = (y * 2) != 7 - b;

//Saída
console.log("Resultado das espressões: ");
console.log("A = (6.0 - 4.000) > 8: " + A);
console.log("B = 6.0 - (2 * 8) > (12 % 2);: " + B);
console.log("C = 2 != 12: " + C);
console.log("D = (6.0 * 2) != 12: " + D);
console.log("E = (12 % 2) <= (2 % 12): " + E);
console.log("F = 8 < 7.5: " + F);
console.log("G = (4.000 / 8) + (6.0 * 2) - 5 >= 7.5: " + G);
console.log("H = (12 * 4.000) + 2 == (8 * 6.0) + 2: " + H);
console.log("I = 12 == 4.000 + 7.5: " + I);
console.log("J = (2 * 2) != 7 - 7.5: " + J);
