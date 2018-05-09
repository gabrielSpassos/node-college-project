var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect("mongodb://localhost:27017/gym");

var dbMongo = mongoose.connection;

dbMongo.on('error', console.error.bind(console, 'Não foi possível se conectar no MongoDB!'));
dbMongo.once('open', function () {
	console.log('Aplicação conectada no MongoDB');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var treino = mongoose.model('treino',
	new mongoose.Schema({
        nomeTreino: { type: String },
    }));
    
app.get('/usuarios', function (req, res) {
    res.send('Lista de Usuários!!!');
});

app.get('/usuarios/id', function (req, res) {
    res.send('Usuário {id} retornado!');
});

app.post('/usuarios/id', function (req, res) {
    res.send('Usuário {id} Cadastrado!');
});

app.put('/usuarios/id', function (req, res) {
    res.send('Usuário {id} Alterado!');
});

app.get('/treinos', function (req, res) {
    res.send('Lista de Treinos!');
});

app.get('/treinos/id', function (req, res) {
    var teste = "Marley cotoco!";

    treino.find({}, function (err, treinos) {
		if (err) {
			console.error(err);
			res.status(500).send('Erro na aplicação: ' + err.message);
		} else {
            console.log("Amigo estou aqui!");
            console.log(treinos);
			res.render('treino', {
                teste: teste,
                treinos: treinos
            });
        }
	});
});

app.post('/treinos/id', function (req, res) {
    res.send('treino {id} Cadastrado!');
});

app.put('/treinos/id', function (req, res) {
    res.send('treino {id} alterado!');
});

app.put('/exercicios/id', function (req, res) {
    res.send('exercicio {id} alterado!');
});

app.listen(4200, function () {
    console.log('Iniciando aplicação na porta 4200!');
});
