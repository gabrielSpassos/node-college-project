-- inserts necessario
insert into treino_usuario_exercicio (id_usuario, id_dia, id_treino_exercicio, peso, repeticoes, series, descanso)
values("22222222222", 5, 33, 10, 12, 3, "60s" ),
("22222222222", 5, 15, 20, 10, 4, "60s" );

-- update
update treino_usuario_exercicio
set peso = 15, repeticoes = 8, series = 4, descanso = '90s'
where treino_usuario_exercicio.id = 4;