var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect("mongodb://localhost:27017/gym", { useMongoClient: true });

var dbMongo = mongoose.connection;

dbMongo.on('error', console.error.bind(console, 'Não foi possível se conectar no MongoDB!'));
dbMongo.once('open', function () {
	console.log('Aplicação conectada no MongoDB');
});

var treino = mongoose.model('treino',
	new mongoose.Schema({
        nomeTreino: { type: String },
        exercicios: { type: Array }
    }));
    
var exercicio = mongoose.model('treino',
	new mongoose.Schema({
        nomeExercicio: { type: String },
        peso: { type: Number },
        repeticoes: { type: Number },
        series: {type: Number },
        descanco: {type: String }
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
    res.send('treino {id} retornado!');
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
