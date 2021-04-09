/*
AGÊNCIA DEV

 Na nossa incrível agência de viagens faremos um pacotão a sua escolha:
1- Precisa ter 3 opções de lugares no mínimo (fica a criatividade do squad);
2 - Fazer um pacote de viagem para cada lugar incluindo adicionais (por exemplo: Viagem para Santa Catarina; passeio no: Beto Carrero; 2 dias de parque,
e 1 em pontos turísticos; hotel que vai ficar; quantidade de pessoas; formas de pagamento; valor total da viagem);
(obs: é só um exemplo faça a parir da sua imaginação!!)

1- mostre 3 destinos para o cliente
2- deixe o cliente escolher um dos lugares
3- apresente o (ou os) pacotes para a escolha do cliente
4- depois que ele escolher // boa viagem (se quiser incremente mais como dito acima)
*/
const ler = require("prompt-sync")();

console.log("::: Agência Dev :::");
console.log("Escolha um dos lugares");
console.log("1) Tokyo \n2) Kyoto \n3) Nikko");
var escolha = ler("Digite opção 1, 2 ou 3. ");

  if(escolha=="1"){
      console.log("Uma das cidade mais lindas do Japão. Foi lá que surgiram os três macacos: o macaco que não vê, o que não escuta e o que não fala.");
      console.log("Para Tokyo só temos dois pacote por enquanto:\n1) 3 dias e 2 noites = R$ 3.200,00 \n2) 4 dias e 4 noites = R$ 5.000,00");
      console.log("Pagamento em dinheiro ou cartão.");

      escolha = ler ("Digite o número do pacote: ");
      if(escolha=="1") console.log("Boa viagem e aproveite seus 3 dias e 2 noites em Tokyo!");
      if(escolha=="2") console.log("Boa viagem e aproveite seus 4 dias e 4 noites em Tokyo!");
  }
  else if(escolha=="2"){
      console.log("Visitar Kyoto é caminhar por ruas estreitas repletas de templos milenares, é encontrar com uma gueixa acompanhando um cliente pelas ruas do Gion.");
      console.log("VEJA NOSSOS PACOTES");
      console.log("1) 2 dias por R$ 2.500,00 \n2) 4 noites por R$ 10.000,00");
      console.log("Pagamento em dinheiro ou até 10x no cartão sem juros.");
      
      escolha = ler("Digite o número do pacote: ");
      if(escolha=="1") console.log("Boa viagem e aproveite seus 2 dias em Kyoto!");
      if(escolha=="2") console.log("Boa viagem e aproveite seus 4 dias em Kyoto!");
  }
  else if(escolha=="3"){
    console.log("Uma das cidade mais lindas do Japão. Foi lá que surgiram os três macacos: o macaco que não vê, o que não escuta e o que não fala.");
    console.log("VEJA NOSSOS PACOTES");
    console.log("1) 1 dia (bate e volta) R$ 1.000,00 \n2) 3 noites por R$ 3.500,00");
    console.log("Pagamento em dinheiro.");
    
    escolha = ler("Digite o número do pacote: ");
    if(escolha=="1") console.log("Boa viagem e aproveite seu um dia em Nikko! ");
    if(escolha=="2") console.log("Boa viagem e aproveite suas 3 noites em Nikko! ");
  }