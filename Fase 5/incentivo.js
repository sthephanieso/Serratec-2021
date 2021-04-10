//11. No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral.

const ler = require('prompt-sync')();
console.log("Aprendendo sobre as frutas Maçã, Morango e Banana.");

var frutas = ler("Qual a sua fruta preferida entre Maça, Morango e Banana? (Digite Ma, Mo ou Ba): ");

switch(frutas){
    case "Ma":
        console.log("\n1. As maçãs são na verdade parte da família das rosas, assim como as pêras e as ameixas.");
        console.log("\n2. Existem mais de 7.500 variedades de maçãs cultivadas em todo o mundo. Levaria mais de 20 anos para experimentar todas se você comesse uma por dia.");
        console.log("\n3. As maçãs podem variar em tamanho de tão pequeno como uma cereja para tão grande quanto uma toranja.");
        console.log("\n4. As maçãs, no geral, contêm altos níveis de boro, o que aumenta a agilidade mental.");
        console.log("\n5. A maior maçã já colhida pesava três quilos.");
        console.log("\n6. Na Grécia Antiga, oferecer uma maçã para uma garota significava que você a estava pedindo em casamento, e se ela aceitasse a fruta, aceitava também o seu pedido.");
        console.log("\n7. Aqueles adesivos pequenos e redondos que são colados em algumas frutas são comestíveis.");
        break;
    
    case "Mo":
        console.log("\n1. Morangos eram considerados venenosos na Argentina até meados de 1800.");
        console.log("\n2. Morangos são a única fruta com semente do lado de fora.");
        console.log("\n3. Nos tempos medievais, morangos eram servidos em banquetes importantes para trazer paz e prosperidade.");
        console.log("\n4. Acreditava-se que morangos eram afrodisíacos e eram servidos a recém-casados.");
        console.log("\n5. Um morango tem, em média, 200 sementes.");
        console.log("\n6. Formas nativas de morangos se adaptaram a diversos climas e nascem em todos os principais continentes exceto África, Austrália e Nova Zelândia.");
        console.log("\n7. Aqueles adesivos pequenos e redondos que são colados em algumas frutas são comestíveis.");
        break;

    case "Ba":
        console.log("\n1. Banana possui vitamina B6, que regula os níveis de glicose no sangue. Esta vitamina também vai deixá-lo com mais disposição!");
        console.log("\n2. A vitamina B6 nas bananas também ajuda a combater o estresse relacionado com qualquer coisa de sua vida profissional e sua vida pessoal.");
        console.log("\n3. Bananas podem aliviar a azia por causa do efeito antiácido natural que tem sobre o corpo.");
        console.log("\n4. As bananas são ricas em fibras. Isso pode ajudar a regular os movimentos do intestino, sem recorrer a laxantes.");
        console.log("\n5. Banana reduz as cãibras.");
        console.log("\n6. Bananas podem ajudar a curar a ressaca.");
        console.log("\n7. Aqueles adesivos pequenos e redondos que são colados em algumas frutas são comestíveis.");
        break;

    default:
        mensagem = "Não temos informações sobre essa fruta. Volte mais tarde!";
        console.log(mensagem);
    }
