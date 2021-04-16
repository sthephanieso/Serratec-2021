CREATE TABLE public.produtos
(
    codigo character varying(5)NOT NULL,
    nome character varying(60) NOT NULL,
    descricao character varying(255) NOT NULL,
    valor money,
	categoria character varying(25),
	cartao double precision,
	boleto double precision,
	vista double precision,
    CONSTRAINT produtos_pkey PRIMARY KEY (codigo),
    CONSTRAINT codigo_unico UNIQUE (codigo)
);


ALTER TABLE public.produtos  OWNER to postgres;


SELECT * FROM produtos


INSERT INTO produtos (codigo, nome, descricao, valor, categoria, cartao, boleto, vista)
VALUES ('S858G', 'Samsung Galaxy S21','Um smartphone Android com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização.', 5399.10, 'Celular', 5, 15, 40),
		('N546S', 'Nintendo Switch','Adquira o console de videogames que lhe possibilita jogar seus jogos favoritos, onde você quiser e da maneira que preferir.', 2598.89, 'Consoles',  5, 15, 40),
		('P594S', 'Playstation 5','Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console Playstation pode fazer.', 7299.99, 'Consoles', 5, 15, 40),
		('M26O1', 'Motorola One',' o Motorola One chegou para inovar os seus dias, deixando tudo mais prático, rápido e moderno.', 1299.99, 'Celular', 5, 15, 40),
		('T50Z8', 'The Legend Of Zelda: Breath Of The Wild','Entre em um mundo de descoberta, exploração e aventura em The Legend of Zelda: Breath of the Wild, um novo jogo desta aclamada série que está quebrando barreiras.', 388.99, 'Games', 4, 10, 20),
		('SM599', 'Super Mario Odyssey','Com este jogo de Mario, você desfrutará de horas de diversão e novos desafios que permitirão que você se aprimore como jogador.', 384.98, 'Games', 4, 10, 20);

Select 
	codigo,
	nome,
	descricao,
	valor,
	categoria,
	cartao,
	(valor - (valor * cartao/100)) AS cartao_desconto,
	boleto,
	(valor - (valor * boleto/100)) AS boleto_desconto,
	vista,
	(valor - (valor * vista/100)) AS vista_desconto
FROM produtos 

ORDER BY valor DESC


