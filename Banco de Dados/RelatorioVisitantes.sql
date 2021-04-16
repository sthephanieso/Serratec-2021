SELECT 
	V.nome,
	I.data_visita
FROM ingresso I
JOIN visitante V ON V.id = I.id_visitante
ORDER BY nome, data_visita
