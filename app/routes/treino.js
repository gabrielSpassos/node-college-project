module.exports = function(application){

    application.get('/treinos', function(req, res){
        const treinoDAO = application.app.models.treinoDAO;

        treinoDAO.getTreino(function(err, result){
            res.render('treino/meuTreino', {treino : result});
        });

    });

    application.get('/treinos/:idTreino', function(req, res){
        const treinoDAO = application.app.models.treinoDAO;
        let idTreino = req.params.idTreino;

        treinoDAO.getTreinoById(idTreino, function(err, result){
            if(result.length > 0){
                res.render('treino/test', {
                    treino : result,
                });
            }else{
                res.render('error/error', {
                    error: "Erro ao buscar treino"
                });
            }
        });
    });

    application.post('/treinos', function(req, res) {
        const treinoDAO = application.app.models.treinoDAO;
        const nomeTreino = req.body.nomeTreino;
        treinoDAO.saveTreino(nomeTreino);
        treinoDAO.getLastTreinoSaved(function(error, result){
            if(result.length > 0){
                res.render('treino/test', {
                    treino : result,
                });
            }else{
                res.render('error/error', {
                    error: "Erro ao criar treino"
                });
            }
        });
        
    });

    application.put('/treinos/:idTreino', function(req, res) {
        const treinoDAO = application.app.models.treinoDAO;
        const nomeTreino = req.body.nomeTreino;
        let idTreino = req.params.idTreino;

        treinoDAO.updateTreino(idTreino, nomeTreino);
        treinoDAO.getTreinoById(idTreino, function(error, result){
            if(result.length > 0){
                res.render('treino/test',{
                    treino : result,
                });
            }else{
                res.render('error/error', {
                    error: "Erro ao atualizar treino"
                });
            }
        });
    });
};
