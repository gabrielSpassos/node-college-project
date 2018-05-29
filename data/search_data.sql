use gym
/*Pesquisa que usaremos na pagina do treino (apenas visualização)*/
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

select* from treino_usuario_exercicio



SELECT u.cpf_usuario, u.nomecompleto, u.telefone, u.peso, u.altura, tm.nome_modalidade, tm.valor 
FROM usuario u JOIN tipo_modalidade tm ON tm.id_modalidade = u.modalidade
WHERE u.cpf_usuario = "01010101010";

/**************UPDATES **************/
UPDATE usuario SET senha = "465789" WHERE cpf_usuario = "01010101010";
UPDATE usuario SET telefone = "999813540" WHERE cpf_usuario = "01010101010";
UPDATE usuario SET peso = 80 WHERE cpf_usuario = "01010101010";
UPDATE usuario SET altura = 2.03 WHERE cpf_usuario = "01010101010";
UPDATE usuario SET modalidade = 3 WHERE cpf_usuario = "01010101010";

UPDATE treino_usuario_exercicio SET peso = 35 WHERE id_usuario = "01010101010" AND id_treino_exercicio = 5; 
UPDATE treino_usuario_exercicio SET repeticoes = 12 WHERE id_usuario = "01010101010" AND id = 2;
UPDATE treino_usuario_exercicio SET series = 3 WHERE id_usuario = "01010101010" AND id = 2;
UPDATE treino_usuario_exercicio SET descanso = 40 WHERE id_usuario = "01010101010" AND id = 2;




/*********DELETE DOS TREINOS*******/
DELETE FROM treino_usuario_exercicio WHERE id_usuario = "01010101010" AND id = 1; /*É preciso rever!!!! */