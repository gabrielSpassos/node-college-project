module.exports = function(application){

    application.get('/usuarios/:id/treinos', function(req, res){
        let connectionMysql = application.config.dbMysql();
        let usuarioDAO = application.app.models.usuarioDAO;

        const idUsuario = req.params.id;
        const idDia = req.query.idDia;

        usuarioDAO.getTreinoUsuarioByIdUsuarioAndIdDia(connectionMysql, idUsuario, idDia, function(err, result){
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