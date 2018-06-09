-- inserts necessario
insert into treino_usuario_exercicio (id_usuario, id_dia, id_treino_exercicio, peso, repeticoes, series, descanso)
values("22222222222", 5, 33, 10, 12, 3, "60s" ),
("22222222222", 5, 15, 20, 10, 4, "60s" );

-- update
update treino_usuario_exercicio
set peso = 15, repeticoes = 8, series = 4, descanso = '90s'
where treino_usuario_exercicio.id = 4;

select tue.id_usuario, d.nome_dia, t.nomeTreino, e.nomeExercicio, tue.peso, tue.repeticoes, tue.series, tue.descanso from treino_usuario_exercicio tue
join treino_exercicio te 
on te.id = tue.id_treino_exercicio
join dia d 
on d.id_dia = tue.id_dia
join treino t
on t.id = te.id_treino
join exercicio e 
on e.id = te.id_exercicio
Join usuario u
on u.cpf_usuario = tue.id_usuario
where tue.id_usuario = "01010101010" and tue.id_dia = 2;

select * from treino_usuario_exercicio;