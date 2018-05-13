module.exports = function(){

    this.getTreino = function(connectionMysql, callback){
        return connectionMysql.query('select * from treino', callback);
    }

    this.getTreinoById = function(connectionMysql, id, callback){
        return connectionMysql.query('select * from treino where id = '.concat(id), callback);
    }

    this.saveTreino = function(connectionMysql, nome, callback){
        return connectionMysql.query(`insert into treino (nome) value ('${nome}'); `, callback);
    }
    
    this.updateTreino = function(connectionMysql, id, nome, callback){
        return connectionMysql.query(`UPDATE treino SET nome='${nome}' WHERE id = '${id}';`, callback);
    }

    this.getLastTreinoSaved = function(connectionMysql, callback) {
        return connectionMysql.query('SELECT * FROM treino ORDER BY id DESC LIMIT 1;', callback);
    }

    return this;
}


