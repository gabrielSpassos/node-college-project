module.exports = function(application){

    application.get('/usuarios/:id/exercicios', function(req, res){
        const usuarioDAO = application.back.models.usuarioDAO;

        const idUsuario = req.params.id;
        const idDia = req.query.idDia;

        usuarioDAO.getTUEpDia(idUsuario, idDia, function(err, result){
            if(result.length > 0){
                res.render('treino/test2', {
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
        const usuarioDAO = application.back.models.usuarioDAO;

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

    application.post('/usuarios/:id/exercicios', function (req, res) {
        const usuarioDAO = application.back.models.usuarioDAO;

        const idUsuario = req.params.id;
		const idDia = req.body.idDia;
		const idTreinoExercicio = req.body.idTreinoExercicio;
        const peso = req.body.peso;
        const repeticoes = req.body.repeticoes;
        const series = req.body.series;
        const descanso = req.body.descanso;

        usuarioDAO.saveTreinoExercicioUsuario(idUsuario, idDia, idTreinoExercicio, peso, repeticoes, series, descanso);
		
        usuarioDAO.getTUEpDia(idUsuario, idDia, function(err, result){
            if(result.length > 0){
                res.render('treino/test2', {
                    treino_usuario : result,
                });
            }else{
                res.render('error/error', {
                    error: 'Não foi encontrado exercicios para esse usuário'
                });
            }
        });
    });
};
