module.exports = function(application){

    application.get('/usuarios/:id', function(req, res){
        const connectionMysql = application.config.dbMysql();
        const usuarioDAO = application.app.models.usuarioDAO;


        const idUsuario = req.params.id;
        const idDia = 2;
        console.log(idUsuario, idDia);
        usuarioDAO.getTUEpDia(connectionMysql, idUsuario, idDia, function(result, err){
            console.log("Resultado", result);
            if(result.length > 0){
                res.render('telasTest/usuarioConsultaTreino', {
                    tue : result,
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
