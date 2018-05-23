use gym;
/*Dias*/
insert into dia(nome_dia)values("Segunda");
insert into dia(nome_dia)values("Terça");
insert into dia(nome_dia)values("Quarta");
insert into dia(nome_dia)values("Quinta");
insert into dia(nome_dia)values("Sexta");
insert into dia(nome_dia)values("Sabádo");
select *from dia;

/*Modalidades*/
insert into tipo_modalidade(nome_modalidade, valor)values("Mensal", 129.90);
insert into tipo_modalidade(nome_modalidade, valor)values("Semestral", 720.90);
insert into tipo_modalidade(nome_modalidade, valor)values("Anual", 1199.90);
select *from tipo_modalidade;

/*Usurios*/
insert into usuario (cpf_usuario, nomecompleto, telefone, peso, altura, modalidade, senha) values ("03726138021", "Eduardo Amroginski", 33660939, 84.32, 1.85, 1, "12345");
insert into usuario (cpf_usuario, nomecompleto, telefone, peso, altura, modalidade, senha) values ("22222222222", "Gabriel Passos", 99998888, 82, 1.83, 3, "12345");
insert into usuario (cpf_usuario, nomecompleto, telefone, peso, altura, modalidade, senha) values ("11111111111", "Lucas-Marley", 8181818181, 78.32, 1.80, 2, "12345");
select *from usuario;

/*Treinos*/
desc treino;
insert into treino (nomeTreino) values ('Treino de Peito');
insert into treino (nomeTreino) values ('Treino de Perna');
insert into treino (nomeTreino) values ('Treino de Costas');
insert into treino (nomeTreino) values ('Treino de Bíceps');
insert into treino (nomeTreino) values ('Treino de Ombros');
insert into treino (nomeTreino) values ('Treino de Tríceps');
insert into treino (nomeTreino) values ('Treino de Abdomen/Faravertebrais');
select * from treino
order by id;


/*******************************EXERCICIOS****************************************/
desc exercicio;
/*Peito*/
insert into exercicio (nomeExercicio) value ('Supino Reto');
insert into exercicio (nomeExercicio) value ('Supino Inclinado');
insert into exercicio (nomeExercicio) value ('Supino Declinado');
insert into exercicio (nomeExercicio) value ('Crucifixo Reto');
insert into exercicio (nomeExercicio) value ('Crucifixo Inclinado');
insert into exercicio (nomeExercicio) value ('Voador');
insert into exercicio (nomeExercicio) value ('Suplino Inclinado Halter');
insert into exercicio (nomeExercicio) value ('Supino Reto c/ Halter');
insert into exercicio (nomeExercicio) value ('Cross Over');

/*Pernas*/
insert into exercicio (nomeExercicio) value ('Adutor');
insert into exercicio (nomeExercicio) value ('Glúteos 4 Apoios');
insert into exercicio (nomeExercicio) value ('Panturrilha Sentada');
insert into exercicio (nomeExercicio) value ('Panturrilha em Pé');
insert into exercicio (nomeExercicio) value ('Agachamento');
insert into exercicio (nomeExercicio) value ('Hack Machine');
insert into exercicio (nomeExercicio) value ('Leg Press');
insert into exercicio (nomeExercicio) value ('Extensor');
insert into exercicio (nomeExercicio) value ('Afundo/Avanço');
insert into exercicio (nomeExercicio) value ('Flexora Deitado');
insert into exercicio (nomeExercicio) value ('Flexor em Pé');
insert into exercicio (nomeExercicio) value ('Abdutor');


/*COSTAS*/
insert into exercicio (nomeExercicio) value ('Barra Fixa');
insert into exercicio (nomeExercicio) value ('Serrote');
insert into exercicio (nomeExercicio) value ('Remada Curvada');
insert into exercicio (nomeExercicio) value ('Voador Inverso');
insert into exercicio (nomeExercicio) value ('Crucifixo Inverso');
insert into exercicio (nomeExercicio) value ('Remada Articulada');
insert into exercicio (nomeExercicio) value ('Puxada Frente');
insert into exercicio (nomeExercicio) value ('Remada Baixa');

/*Biceps*/
insert into exercicio (nomeExercicio) value ('Rosca Direita');
insert into exercicio (nomeExercicio) value ('Rosca no Scott');
insert into exercicio (nomeExercicio) value ('Rosca Aternada');
insert into exercicio (nomeExercicio) value ('Rosca Concentrada');


/*Ombros*/
insert into exercicio (nomeExercicio) value ('Desenvolvimento de Ombros');
insert into exercicio (nomeExercicio) value ('Elevação Lateral');
insert into exercicio (nomeExercicio) value ('Elevação Frontal');
insert into exercicio (nomeExercicio) value ('Manguito Rotador');
insert into exercicio (nomeExercicio) value ('Remada Alta');
insert into exercicio (nomeExercicio) value ('Encolhimento de Ombros');

/*Triceps*/
insert into exercicio (nomeExercicio) value ('Testa');
insert into exercicio (nomeExercicio) value ('Francês');
insert into exercicio (nomeExercicio) value ('Polia c/ Barra');
insert into exercicio (nomeExercicio) value ('Coice');
insert into exercicio (nomeExercicio) value ('Paralela');

/*Abdomen/Faravertebrais*/
insert into exercicio (nomeExercicio) value ('Infras');
insert into exercicio (nomeExercicio) value ('Obliquos');
insert into exercicio (nomeExercicio) value ('Prancha');
insert into exercicio (nomeExercicio) value ('Prancha Lateral');
insert into exercicio (nomeExercicio) value ('Extensão de Tronco');
insert into exercicio (nomeExercicio) value ('Abdominal Cruzado');
select * from exercicio;

/*****************************************Treino_exercicio******************************/

/*Peito*/
insert into treino_exercicio (id_treino, id_exercicio) values (1,1);
insert into treino_exercicio (id_treino, id_exercicio) values (1,2);
insert into treino_exercicio (id_treino, id_exercicio) values (1,3);
insert into treino_exercicio (id_treino, id_exercicio) values (1,4);
insert into treino_exercicio (id_treino, id_exercicio) values (1,5);
insert into treino_exercicio (id_treino, id_exercicio) values (1,6);
insert into treino_exercicio (id_treino, id_exercicio) values (1,7);
insert into treino_exercicio (id_treino, id_exercicio) values (1,8);
insert into treino_exercicio (id_treino, id_exercicio) values (1,9);

/*Perna*/
insert into treino_exercicio (id_treino, id_exercicio) values (2,10);
insert into treino_exercicio (id_treino, id_exercicio) values (2,11);
insert into treino_exercicio (id_treino, id_exercicio) values (2,12);
insert into treino_exercicio (id_treino, id_exercicio) values (2,13);
insert into treino_exercicio (id_treino, id_exercicio) values (2,14);
insert into treino_exercicio (id_treino, id_exercicio) values (2,15);
insert into treino_exercicio (id_treino, id_exercicio) values (2,16);
insert into treino_exercicio (id_treino, id_exercicio) values (2,17);
insert into treino_exercicio (id_treino, id_exercicio) values (2,18);
insert into treino_exercicio (id_treino, id_exercicio) values (2,19);
insert into treino_exercicio (id_treino, id_exercicio) values (2,20);
insert into treino_exercicio (id_treino, id_exercicio) values (2,21);

/*Costas*/
insert into treino_exercicio (id_treino, id_exercicio) values (3,22);
insert into treino_exercicio (id_treino, id_exercicio) values (3,23);
insert into treino_exercicio (id_treino, id_exercicio) values (3,24);
insert into treino_exercicio (id_treino, id_exercicio) values (3,25);
insert into treino_exercicio (id_treino, id_exercicio) values (3,26);
insert into treino_exercicio (id_treino, id_exercicio) values (3,27);
insert into treino_exercicio (id_treino, id_exercicio) values (3,28);
insert into treino_exercicio (id_treino, id_exercicio) values (3,29);

/*Biceps*/
insert into treino_exercicio (id_treino, id_exercicio) values (4,30);
insert into treino_exercicio (id_treino, id_exercicio) values (4,31);
insert into treino_exercicio (id_treino, id_exercicio) values (4,32);
insert into treino_exercicio (id_treino, id_exercicio) values (4,33);

/*Ombros*/
insert into treino_exercicio (id_treino, id_exercicio) values (5,34);
insert into treino_exercicio (id_treino, id_exercicio) values (5,35);
insert into treino_exercicio (id_treino, id_exercicio) values (5,36);
insert into treino_exercicio (id_treino, id_exercicio) values (5,37);
insert into treino_exercicio (id_treino, id_exercicio) values (5,38);
insert into treino_exercicio (id_treino, id_exercicio) values (5,39);

/*Triceps*/
insert into treino_exercicio (id_treino, id_exercicio) values (6,40);
insert into treino_exercicio (id_treino, id_exercicio) values (6,41);
insert into treino_exercicio (id_treino, id_exercicio) values (6,42);
insert into treino_exercicio (id_treino, id_exercicio) values (6,43);
insert into treino_exercicio (id_treino, id_exercicio) values (6,44);

/*Abdomen/Faravertebrais*/
insert into treino_exercicio (id_treino, id_exercicio) values (7,45);
insert into treino_exercicio (id_treino, id_exercicio) values (7,46);
insert into treino_exercicio (id_treino, id_exercicio) values (7,47);
insert into treino_exercicio (id_treino, id_exercicio) values (7,48);
insert into treino_exercicio (id_treino, id_exercicio) values (7,49);
insert into treino_exercicio (id_treino, id_exercicio) values (7,50);
select * from treino_exercicio;

/*Insert Treino Teste*/
insert into treino_usuario_exercicio (id_usuario, id_dia, id_treino_exercicio, peso, repeticoes, series, descanso)values("03726138021", 2, 2, 20, 12, 4, "30s" );
insert into treino_usuario_exercicio (id_usuario, id_dia, id_treino_exercicio, peso, repeticoes, series, descanso)values("03726138021", 2, 5, 10, 15, 3, "30s" );
insert into treino_usuario_exercicio (id_usuario, id_dia, id_treino_exercicio, peso, repeticoes, series, descanso)values("03726138021", 3, 10, 60, 12, 4, "30s" );
select *from treino_usuario_exercicio