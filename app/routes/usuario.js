module.exports = function(application){

    application.get('/usuarios/:id', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var usuarioDAO = application.app.models.treinoDAO;
        const idUsuario = req.params.id;
        const idDia = 5;

        usuarioDAO.getUsuarioTreinosByIdUsuariosAndIdDia(connectionMysql, idUsuario, idDia, function(result, err){
            console.log("Resultado")
            if(result.length > 0){
                res.render('telasTest/usuarioConsultaTreino', {
                    treino_usuario : result,
                });
            }else{
                res.render('error/error', {
                    error: 'Não foi encontrado treino'
                });
            }
        });
    });




    application.put('/usuarios/:id/exercicios', function (req, res) {
        
        let usuarioDAO = application.app.models.usuarioDAO;

        const idUsuario = req.params.id;
        const idTreinoUsuarioExercicio = req.body.idTreinoUsuarioExercicio;
        const peso = req.body.peso;
        const repeticoes = req.body.repeticoes;
        const series = req.body.series;
        const descanso = req.body.descanso;

        usuarioDAO.updateUsuarioExercicioByIdTreinoExercioUsuario(idUsuario, peso, repeticoes, series, descanso, idTreinoUsuarioExercicio);
        usuarioDAO.getTreinoExercicioUsuarioByIdUsuarioAndIdTreinoExercioUsuario(idUsuario, idTreinoUsuarioExercicio, function (err, result) {
                if(result.length > 0){
                    res.render('treino/test2', {
                        treino_usuario : result,
                    });
                }else{
                    res.render('error/error', {
                        error: 'Não foi encontrado treino'
                    });
                }
            })

    });
};