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



-- SELECT * FROM treino ORDER BY id DESC LIMIT 1;

-- UPDATE treino SET nome='teste' WHERE id = 4;

-- delete from treino where id = 5 or 6 or 7;



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