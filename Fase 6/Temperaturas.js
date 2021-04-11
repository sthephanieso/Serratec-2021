//Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit.

var celsius = 0;
var fahrenheit = 0;

do{
    for(i = 0; i <= 40; ){
        celsius = i++;
        fahrenheit = (celsius * 9/5) + 32;
        console.log("Celsius: " + celsius + " = Fahrenheit: " + fahrenheit);
    }
} while(i <= 40)