desc treino;
insert into treino (nome) values ('Treino de Peito');
insert into treino (nome) values ('Treino de Costas'), ('Treino de Perna');
select * from treino
order by id;
-- SELECT * FROM treino ORDER BY id DESC LIMIT 1;

-- UPDATE treino SET nome='teste' WHERE id = 4;

-- delete from treino where id = 5 or 6 or 7;

desc exercicio;
insert into exercicio (nome, peso, repeticoes, series, descanco) value ('Supino Reto', 20, 12, 3, '60s');
insert into exercicio (nome, peso, repeticoes, series, descanco) value ('Agachamento', 50, 10, 3, '45s');
insert into exercicio (nome, peso, repeticoes, series, descanco) value ('Puxada Frontal', 60, 15, 3, '90s');
insert into exercicio (nome, peso, repeticoes, series, descanco) value ('Remada', 40, 10, 4, '35s');
select * from exercicio;

desc treino_exercicio;
insert into treino_exercicio (id_treino, id_exercicio) values (1,1), (2,3), (3,2);
insert into treino_exercicio (id_treino, id_exercicio) values (2,4);
select * from treino_exercicio;

select t.nome 'Treino' , e.nome 'Exercicio', e.peso 'Peso', e.repeticoes 'Repeticoes', e.series 'Series', e.descanco 'Descanco' 
from treino_exercicio te
join treino t
on t.id = te.id_treino
join exercicio e
on e.id = te.id_exercicio
order by t.nome;

