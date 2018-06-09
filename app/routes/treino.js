module.exports = function(application){

    application.get('/treinos', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;

        treinoDAO.getTreino(connectionMysql, function(err, result){
            res.render('treino/meuTreino', {treino : result});
        });

    });

    application.get('/treinos/:idTreino', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;
        let idTreino = '';
        if(req.params.idTreino){
            idTreino = parseInt(req.params.idTreino);
        }
        treinoDAO.getTreinoById(connectionMysql, idTreino, function(err, result){
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
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO; 
        const nomeTreino = req.body.nomeTreino;
        treinoDAO.saveTreino(connectionMysql, nomeTreino);
        treinoDAO.getLastTreinoSaved(connectionMysql, function(error, result){
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
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;
        const nomeTreino = req.body.nomeTreino;
        let idTreino = '';
        console.log(idTreino)
        if(req.params.idTreino){
            console.log(idTreino)
            idTreino = parseInt(req.params.idTreino);
        } 
        treinoDAO.updateTreino(connectionMysql, idTreino, nomeTreino);
        treinoDAO.getTreinoById(connectionMysql, idTreino, function(error, result){
            console.log('Result', result);
            if(result.length > 0){
                res.render('treino/test',{
                    treino : result,
                });
              //  console.log(idTreino)
            }else{
                res.render('error/error', {
                    error: "Erro ao atualizar treino"
                });
            }
        });
    });

};
