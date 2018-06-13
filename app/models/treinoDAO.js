module.exports = function(application){

    const connectionMysql = application.config.dbMysql();

    this.getTreino = function(callback){
        return connectionMysql.query('select * from treino', callback);
    };

    this.getTreinoById = function(idTreino, callback){ //Não esquecer: aqui vai o ID DO TREINO de 1 a 7
        return connectionMysql.query('select * from treino where id = '.concat(idTreino), callback);
    };

    this.saveTreino = function(nome, callback){
        return connectionMysql.query(`insert into treino (nomeTreino) value ('${nome}'); `, callback);
    };
    
    this.updateTreino = function(id, nome, callback){
        return connectionMysql.query(`UPDATE treino SET nomeTreino='${nome}' WHERE id = '${id}';`, callback);
    };

    this.getLastTreinoSaved = function(callback) {
        return connectionMysql.query('SELECT * FROM treino ORDER BY id DESC LIMIT 1;', callback);
    };

    this.getTreinoExercicio = function(callback){
        return connectionMysql.query('SELECT te. id, te.id_treino, t.nomeTreino, te.id_exercicio, e.nomeExercicio FROM treino_exercicio te JOIN treino t, exercicio e WHERE te.id_treino = t.id AND te.id_exercicio = e.id;', callback);
    }

    this.getTreinoExercicioById = function(idTreino, callback){ //Não esquecer: aqui vai o ID DO TREINO de 1 a 7
        return connectionMysql.query('SELECT te.id, te.id_treino, t.nomeTreino, te.id_exercicio, e.nomeExercicio FROM treino_exercicio te JOIN exercicio e ON te.id_exercicio = e.id JOIN treino t ON t.id = te.id_treino WHERE te.id_treino ='.concat(idTreino), callback);
    };

    return this;
};
