var mysql = require('mysql'); //chama o banco de dados mysql

var ConnectMySql = function(){
    console.log("Conexão com Banco bd foi estabelecida");
    return mysql.createConnection({ //faz a conexão com o banco de dados
        host: '52.2.220.2',
        port:'3636',
        user: 'root',
        password: '',
        database: 'gym'
    });

};

module.exports = function(){
    console.log("O autoload carregou o modulo BD");
    return ConnectMySql;
};
