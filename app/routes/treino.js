module.exports = function(application){

    application.get('/treinos', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;

        treinoDAO.getTreino(connectionMysql, function(err, result){
            res.render('treino/meuTreino', {treino : result});
        });

    });

    application.get('/treinos/:id', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;
        let id = '';
        if(req.params.id){
            id = parseInt(req.params.id);
        }
        treinoDAO.getTreinoById(connectionMysql, id, function(err, result){
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
        const nomeTreino = req.body.nomeTreino.substring(0,150);
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

    application.put('/treinos/:id', function(req, res) {
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;
        const nomeTreino = req.body.nomeTreino.substring(0,150);
        let id = '';
        if(req.params.id){
            id = parseInt(req.params.id);
        } 
        treinoDAO.updateTreino(connectionMysql, id, nomeTreino);
        treinoDAO.getLastTreinoSaved(connectionMysql, function(error, result){
            console.log('Result', result);
            if(result.length > 0){
                res.render('treino/test', {
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
