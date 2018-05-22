drop database gym;
create database gym;
use gym;
create table treino(
id int auto_increment,
nome varchar(100),
primary key(id)
);

create table exercicio(
id int auto_increment,
nome varchar(100) unique,
primary key(id)
);

create table treino_exercicio(
id int auto_increment,
id_treino int not null, 
id_exercicio int not null,
primary key(id)
);

create table usuario(
	cpf_usuario varchar(11) not null unique primary key,
    nomecompleto text(50) not null, 
    telefone numeric(11) not null, 
    peso float(4),
    altura float(3),
    modalidade int not null
    
);

create table tipo_modalidade(
	id_modalidade int auto_increment unique primary key,
    nome_modalidade text(50) not null,
    valor real not null
);

create table dia(
	id_dia int auto_increment unique primary key,
	nome_dia text(7) not null
);

create table treino_usuario_exercicio(
	id int auto_increment primary key,
    id_usuario varchar(11) not null,
    id_dia int not null,
    id_treino_exercicio int,
    peso double,
	repeticoes int,
	series int,
	descanco varchar(10)
);

alter table treino_usuario_exercicio
add foreign key (id_usuario) references usuario(cpf_usuario);
alter table treino_usuario_exercicio
add foreign key (id_dia) references dia(id_dia);
alter table treino_usuario_exercicio
add foreign key (id_treino_exercicio) references treino_exercicio(id);

alter table usuario
add foreign key (modalidade) references tipo_modalidade(id_modalidade);

alter table treino_exercicio
add foreign key (id_treino) references treino(id);

alter table treino_exercicio
add foreign key (id_exercicio) references exercicio(id);

insert into dia(nome_dia)values("Segunda");
insert into dia(nome_dia)values("Terça");
insert into dia(nome_dia)values("Quarta");
insert into dia(nome_dia)values("Quinta");
insert into dia(nome_dia)values("Sexta");
insert into dia(nome_dia)values("Sabádo");
select *from dia;



insert into tipo_modalidade(nome_modalidade, valor)values("Mensal", 129.90);
insert into tipo_modalidade(nome_modalidade, valor)values("Semestral", 720.90);
insert into tipo_modalidade(nome_modalidade, valor)values("Anual", 1199.90);
select *from tipo_modalidade;


insert into usuario (cpf_usuario, nomecompleto, telefone, peso, altura, modalidade) values ("03726138021", "Eduardo Amroginski", 33660939, 84.32, 1.85, 1);
insert into usuario (cpf_usuario, nomecompleto, telefone, peso, altura, modalidade) values ("22222222222", "Gabriel Passos", 99998888, 82, 1.83, 3);
insert into usuario (cpf_usuario, nomecompleto, telefone, peso, altura, modalidade) values ("11111111111", "Lucas-Marley", 8181818181, 78.32, 1.80, 2);
select *from usuario;



desc treino;
insert into treino (nome) values ('Treino de Peito');
insert into treino (nome) values ('Treino de Costas'), ('Treino de Perna');
select * from treino
order by id;
-- SELECT * FROM treino ORDER BY id DESC LIMIT 1;

-- UPDATE treino SET nome='teste' WHERE id = 4;

-- delete from treino where id = 5 or 6 or 7;

desc exercicio;
insert into exercicio (nome) value ('Supino Reto');
insert into exercicio (nome) value ('Agachamento');
insert into exercicio (nome) value ('Puxada Frontal');
insert into exercicio (nome) value ('Remada');
select * from exercicio;

desc treino_exercicio;
insert into treino_exercicio (id_treino, id_exercicio) values (1,1);
insert into treino_exercicio (id_treino, id_exercicio) values (2,4);
select * from treino_exercicio;

insert into treino_usuario_exercicio (id_usuario, id_dia, id_treino_exercicio, peso, repeticoes, series, descanco)values("03726138021", 2, 2, 20, 12, 4, "30s" );

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


/*select t.nome 'Treino' , e.nome 'Exercicio', tue.peso 'Peso', tue.repeticoes 'Repeticoes', tue.series 'Series', tue.descanco 'Descanco' 
from treino_exercicio te
join treino t
on t.id = te.id_treino
join exercicio e
on e.id = te.id_exercicio
join treino_usuario_exercicio tue
where tue.cpf_usuario = "03726138021"
order by t.nome;

select te.id, t.nome, e.nome from treino_exercicio te join treino t on t.id = 1 join exercicio e on e.id = 1*/