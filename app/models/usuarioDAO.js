module.exports = function(application){

    const connectionMysql = application.config.dbMysql();

    this.getTreinoUsuarioByIdUsuarioAndIdDia = function(idUsuario, idDia, callback) {
        return connectionMysql.query(`SELECT tue.id, u.nomecompleto, d.nome_dia, t.nomeTreino, e.nomeExercicio, tue.peso, tue.repeticoes, tue.series, tue.descanso FROM treino_usuario_exercicio tue JOIN treino_exercicio te ON te.id = tue.id_treino_exercicio JOIN dia d ON d.id_dia = tue.id_dia JOIN treino t ON t.id = te.id_treino JOIN exercicio e ON e.id = te.id_exercicio JOIN usuario u ON u.cpf_usuario = tue.id_usuario WHERE tue.id_usuario = '${idUsuario}' AND tue.id_dia = '${idDia}'`, callback);
    };
    
    this.updateUsuarioExercicioByIdTreinoExercioUsuario = function (peso, repeticoes, series, descanso, id, callback) {
        return connectionMysql.query(`update treino_usuario_exercicio set peso = '${peso}', repeticoes = '${repeticoes}', series = '${series}', descanso = '${descanso}' where treino_usuario_exercicio.id = '${id}';`, callback);
    };

    this.getTreinoExercicioUsuarioByIdUsuarioAndIdTreinoExercioUsuario = function (idUsuario, idTreinoExercioUsuario, callback) {
        return connectionMysql.query(`SELECT tue.id, u.nomecompleto, d.nome_dia, t.nomeTreino, e.nomeExercicio, tue.peso, tue.repeticoes, tue.series, tue.descanso FROM treino_usuario_exercicio tue JOIN treino_exercicio te ON te.id = tue.id_treino_exercicio JOIN dia d ON d.id_dia = tue.id_dia JOIN treino t ON t.id = te.id_treino JOIN exercicio e ON e.id = te.id_exercicio JOIN usuario u ON u.cpf_usuario = tue.id_usuario WHERE tue.id_usuario = '${idUsuario}' AND tue.id = '${idTreinoExercioUsuario}'`, callback);
    };

    return this;
};
