// A bilheteria do cinema reservou todas as poltronas terminadas em 6 para deficientes. A sala de projeção possui 40 lugares, e para cada um, o sistema irá imprimir se o ingresso pode ser vendido ou não. 

for (let ingresso = 1; ingresso <= 40; ingresso++){
    if (ingresso == 6 || ingresso == 16 || ingresso == 26 || ingresso == 36) {
    console.log("Posição", ingresso, "é reservado para prioridade.");
    continue;
    }
    
    console.log("Vendido: ", ingresso);
}

console.log("Sessão das 20h cheia.");