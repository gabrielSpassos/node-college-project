//declaração do express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//declaração do consign
var consign = require('consign');

// declarando EJS
app.set('view engine', 'ejs');
app.set ('views', './app/views');

//usando Consign
consign().include('./app/routes').into(app);

consign()
.include('./app/routes')
//.then('config/dbConnection.js')
.then('config/dbMysql.js')
.then('app/models')
.into(app);

module.exports = app; //exporta o modulo