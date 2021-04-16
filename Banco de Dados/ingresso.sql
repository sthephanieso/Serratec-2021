CREATE TABLE public.ingresso (
    id serial PRIMARY KEY,
  	data_visita date NOT NULL,
	tipo smallint,
	id_visitante integer NOT NULL
);

ALTER TABLE public.ingresso OWNER to postgres;
ALTER TABLE ingresso ADD UNIQUE (id_visitante, data_visita)

SELECT * FROM ingresso

INSERT INTO ingresso (data_visita, id_visitante)
VALUES ('2020-04-01', 1),
		('2020-04-02', 2),
		('2020-04-03', 4),
		('2020-04-04', 3),
		('2020-04-05', 5),
		('2020-04-06', 6),
		('2020-04-07', 8),
		('2020-04-08', 8),
		('2020-04-09', 2),
		('2020-04-10', 5),
		('2020-04-11', 7),
		('2020-04-12', 2),
		('2020-04-13', 2),
		('2020-04-14', 1);
		
		