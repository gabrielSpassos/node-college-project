module.exports = function(application){

    const connectionMysql = application.config.dbMysql();

    this.getExercicios = function(callback){
        return connectionMysql.query('SELECT te. id, te.id_treino, t.nomeTreino, te.id_exercicio, e.nomeExercicio FROM treino_exercicio te JOIN treino t, exercicio e WHERE te.id_treino = t.id AND te.id_exercicio = e.id;', callback);
    };

    this.getExerciciosByIdTreino = function(idTreino, callback){ //Não esquecer: aqui vai o ID DO TREINO de 1 a 7
        return connectionMysql.query('SELECT te.id, te.id_treino, t.nomeTreino, te.id_exercicio, e.nomeExercicio FROM treino_exercicio te JOIN exercicio e ON te.id_exercicio = e.id JOIN treino t ON t.id = te.id_treino WHERE te.id_treino ='.concat(idTreino), callback);
    };

    return this;
};