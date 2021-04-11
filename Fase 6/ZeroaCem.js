// O programa “de zero a cem” mostra na tela todos os números desse intervalo, mesmo trabalhando com limites de início e fim da repetição definida de 1 a 10.

var zero = 0;

for( i = 1; i <= 10; i++){
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);
    console.log(zero++);

    if(i == 10) {
        console.log(zero++);
    }
}