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

    this.getTreinoDia = function(connectionMysql, idUsuario, callback) {
        console.log("retornando valor")
        return connectionMysql.query('SELECT tue.id_usuario, d.nome_dia, t.nomeTreino, e.nomeExercicio, tue.peso, tue.repeticoes, tue.series, tue.descanso FROM treino_usuario_exercicio tue JOIN treino_exercicio te ON te.id = tue.id_treino_exercicio JOIN dia d ON d.id_dia = tue.id_dia JOIN treino t ON t.id = te.id_treino JOIN exercicio e ON e.id = te.id_exercicio WHERE tue.id_usuario = '.concat(idUsuario), callback);
    }

    return this;
}


