CREATE TABLE public.catraca (
	id serial PRIMARY KEY,
	id_brinquedo integer,
	id_ingresso integer
);

ALTER TABLE public.catraca OWNER to postgres;

SELECT * FROM catraca

INSERT INTO catraca (id_brinquedo, id_ingresso)
VALUES (1, 1),
		(2, 1),
		(3, 1),
		(4, 2),
		(5, 2),
		(2, 2),
		(3, 3),
		(4, 3),
		(1, 4),
		(4, 4),
		(3, 4),
		(5, 5),
		(1, 5),
		(4, 6),
		(2, 7),
		(5, 8),
		(3, 8),
		(2, 9),
		(4, 10),
		(2, 11),
		(5, 12),
		(3, 13),
		(1, 14),
		(2, 14);
