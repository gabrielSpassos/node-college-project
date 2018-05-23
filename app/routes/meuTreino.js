module.exports = function(application){

    application.get('/treino', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;

        treinoDAO.getTreino(connectionMysql, function(err, result){
            res.render('treino/meuTreino', {treino : result});
        });

    });

    application.get('/treino/:id', function(req, res){
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
                    error: 'Não foi encontrado treino'
                }); 
            }
        });
    });

    application.post('/treino', function(req, res) {
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO; 
        const nome = req.body.nome.substring(0,150);
        treinoDAO.saveTreino(connectionMysql, nome);
        treinoDAO.getLastTreinoSaved(connectionMysql, function(error, result){
            res.render('treino/test',{
                treino: result
            });
        });
        
    });

    application.get('/treino/:id', function(req, res) {
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;
        const nome = req.body.nome.substring(0,150);
        let id = '';
        if(req.params.id){
            id = parseInt(req.params.id);
        } 
        treinoDAO.getTreinoDia(connectionMysql, id, function(err, result){
            if(result.length > 0){
                res.render('treino/test', {
                    treino : result,
                });
            }else{
                res.render('error/error', {
                    error: 'Não foi encontrado treino'
                }); 
            }
        });
    });

/********MEUUUUUUUU EDUARDO ****************************************** */
    application.get('/treinodia/:id_usuario', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var treinoDAO = application.app.models.treinoDAO;
        let id_usuario = '';
        if(req.params.id_usuario){
            id_usuario = parseInt(req.params.id_usuario);
        }
        treinoDAO.getTreinoDia(connectionMysql, id_usuario, function(err, result){
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

};
