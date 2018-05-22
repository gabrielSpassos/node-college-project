
/*Pesquisa que usaremos na pagina do treino (apenas visualização)*/
select tue.id_usuario, d.nome_dia, t.nome, e.nome, tue.peso, tue.repeticoes, tue.series, tue.descanco from treino_usuario_exercicio tue
join treino_exercicio te 
on te.id = tue.id_treino_exercicio
join dia d 
on d.id_dia = tue.id_dia
join treino t
on t.id = te.id_treino
join exercicio e 
on e.id = te.id_exercicio
where tue.id_usuario = "03726138021";