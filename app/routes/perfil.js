module.exports = function(application){

    application.get('/perfil/:idUsuario', function(req, res){
        var connectionMysql = application.config.dbMysql();
        var perfilDAO = application.app.models.perfilDAO;
        var idUsuario = '';
        if(req.params.idUsuario){
            idUsuario = parseInt(req.params.idUsuario);
        }
        perfilDAO.getPerfilByID(connectionMysql, idUsuario, function(err, result){
            if(result.length > 0){
                res.render('perfil/testPerfil', {
                    perfilVar : result,
                });
            }else{
                res.render('error/error', {
                    error: 'Não foi encontrado PERFIL'
                });
            }
        });
    });

};