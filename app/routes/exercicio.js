module.exports = function(application){

    application.get('/exercicios', function(req, res){
        const exercicioDAO = application.app.models.exercicioDAO;

        exercicioDAO.getExercicios(function(err, result){
            res.render('treino/consultTreinoExerc', {treinoExerc : result});
        });

    });

    application.get('/exercicios/:idTreino', function(req, res){
        const exercicioDAO = application.app.models.exercicioDAO;
        let idTreino = req.params.idTreino;

        exercicioDAO.getExerciciosByIdTreino(idTreino, function(err, result){
            if(result.length > 0){
                res.render('treino/consultTreinoExerc2', {
                    treinoExerc : result,
                });
            }else{
                res.render('error/error', {
                    error: "Erro ao buscar treino"
                });
            }
        });
    });

};