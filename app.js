var app = require("./config/server");

//var treinoModel = require("./app/models/treinoModel");


/*var bodyParser = require('body-parser');

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
*/
app.listen(4200, function () {
    console.log('Iniciando aplicação na porta 4200!');
});
