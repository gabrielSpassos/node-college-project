//declaração do express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//declaração do consign
const consign = require('consign');

// declarando EJS
app.set('view engine', 'ejs');
app.set ('views', './back/views');

consign()
.include('./back/routes')
.then('config/dbMysql.js')
.then('back/models')
.into(app);

module.exports = app; //exporta o modulo