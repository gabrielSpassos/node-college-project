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

    application.put('/perfil/:id', function (req, res) {
        let connectionMysql = application.config.dbMysql();
        let perfilDAO = application.app.models.perfilDAO;
        let pesoUsuario="";
        let alturaUsuario="";

        const idUsuario = req.params.id;
        const nomecompleto = req.body.nomecompleto;
        const telefone = req.body.telefone;
        if(req.body.peso){
            pesoUsuario  = parseFloat(req.body.peso);
        }
        if(req.body.altura){
            alturaUsuario = parseFloat(req.body.altura);
        }
        const modalidade = req.body.modalidade;
        const senha = req.body.senha;

        perfilDAO.updatedPerfil(connectionMysql, idUsuario, nomecompleto, telefone, pesoUsuario, alturaUsuario, modalidade, senha);
        
        perfilDAO.getPerfilByID(connectionMysql, idUsuario, function (err, result) {
                if(result.length > 0){
                    res.render('perfil/testPerfil', {
                        perfilVar : result,
                    });
                }else{
                    res.render('error/error', {
                        error: 'Não foi encontrado treino'
                    });
                }
            });

    });

};