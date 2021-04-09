/*
Leilaflix
Este é um canal de stream de filmes de Horror e Drama.
Apresente uma lista final de filmes e atrelar a relevância dela de acordo com as escolhas do usuário durante a interação com a lista de filmes exibidos no canal (exemplo da Netflix, Spotify, Youtube)
Dica: categorize a relevância dos filmes, afunilando a preferência do usuário a partir da seleção dos filmes que contém tópicos do interesse do usuário.
(Ex: "Titanic (95%): este filme venceu diversos prêmios Oscar".)

*/

const ler = require('prompt-sync')();

console.log("=== Leilaflix ===");

var flix = ler("Escolha seu gênero. Horror ou Drama? ");
var filme;
var resultado;

if (flix == "Horror") {
let filme = Number(ler("Entre esses filmes de terror 1) Train to Busan e 2) A Quiet Place, qual você prefere? "));
    switch (filme){
        case 1: mensagem = 
        "Recomendação: #Alive (96%): um filme ideal para você que gosta de zumbi."; break
        case 2: mensagem = 
        "Recomendação: His House (81%): este filme foi aclamado pela crítica!"; break
    }
    console.log(mensagem);
}

if (flix == "Drama"){
    let filme = Number(ler("Entre esses filmes de Drama 1) O Quarto de Jack e 2) História de um Casamento, qual você prefere? "));
    switch (filme){
        case 1: mensagem = 
        "Recomendação: Um Olhar do Paraíso (89%): este filme foi indicado ao oscar."; break
        case 2: mensagem = 
        "Recomendação: Lady Bird: A Hora de Voar (84%): este filme recebeu globo de ouro."; break
    }
    console.log(mensagem);
}
