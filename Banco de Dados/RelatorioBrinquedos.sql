SELECT 
	visitante.nome,
	brinquedo.nome,
	ingresso.data_visita 
FROM catraca
JOIN ingresso ON catraca.id_ingresso = ingresso.id
JOIN brinquedo ON catraca.id_brinquedo = brinquedo.id
JOIN visitante ON ingresso.id_visitante = visitante.id



