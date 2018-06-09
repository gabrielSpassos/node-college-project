module.exports = function(application){

    const connectionMysql = application.config.dbMysql();

    this.getTreino = function(connectionMysql, callback){
        return connectionMysql.query('select * from treino', callback);
    };

    this.getTreinoById = function(connectionMysql, idTreino, callback){ //Não esquecer: aqui vai o ID DO TREINO de 1 a 7
        return connectionMysql.query('select * from treino where id = '.concat(idTreino), callback);
    };

    this.saveTreino = function(connectionMysql, nome, callback){
        return connectionMysql.query(`insert into treino (nomeTreino) value ('${nome}'); `, callback);
    };
    
    this.updateTreino = function(connectionMysql, id, nome, callback){
        return connectionMysql.query(`UPDATE treino SET nomeTreino='${nome}' WHERE id = '${id}';`, callback);
    };

    this.getLastTreinoSaved = function(connectionMysql, callback) {
        return connectionMysql.query('SELECT * FROM treino ORDER BY id DESC LIMIT 1;', callback);
    };

    return this;
};
