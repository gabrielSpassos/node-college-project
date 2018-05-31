module.exports = function(application){

    this.getTreinoUsuarioByIdUsuarioAndIdDia = function(connectionMysql, idUsuario, idDia, callback) {
        return connectionMysql.query(`SELECT u.nomecompleto, d.nome_dia, t.nomeTreino, e.id, e.nomeExercicio, tue.peso, tue.repeticoes, tue.series, tue.descanso FROM treino_usuario_exercicio tue JOIN treino_exercicio te ON te.id = tue.id_treino_exercicio JOIN dia d ON d.id_dia = tue.id_dia JOIN treino t ON t.id = te.id_treino JOIN exercicio e ON e.id = te.id_exercicio JOIN usuario u ON u.cpf_usuario = tue.id_usuario WHERE tue.id_usuario = '${idUsuario}' AND tue.id_dia = '${idDia}'`, callback);
    };

    return this;
};
