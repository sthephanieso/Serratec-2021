CREATE TABLE public.brinquedo (
    id serial PRIMARY KEY,
  	nome character varying(50)
);

ALTER TABLE public.brinquedo OWNER to postgres;

SELECT * FROM brinquedo

INSERT INTO brinquedo (nome)
VALUES ('Montanha russa'),
		('Kabum'),
		('Carrinho bate-bate'),
		('Trem fantasma'),
		('Roda Gigante');