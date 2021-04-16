CREATE TABLE public.visitante (
    id serial PRIMARY KEY,
  	nome character varying(50) NOT NULL,
	cpf character varying(12),
	data_nascimento date NOT NULL
);

ALTER TABLE public.visitante OWNER to postgres;

SELECT * FROM visitante

INSERT INTO visitante (nome, cpf, data_nascimento)
VALUES ('Moises', '123.456', '2000-01-25'),
		('Alice', '333.111', '2010-01-21'),
		('Taiana', '221.664', '1994-12-30'),
		('Sthephanie', '111.888', '1997-09-18'),
		('Amanda', '257.393', '1996-02-25'),
		('Luís Felipe', '135.678', '1993-12-22'),
		('Erich', '121.121', '1995-04-20'),
		('Jessica', '128.822', '1992-03-10');