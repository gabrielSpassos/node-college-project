module.exports = function(application){

    application.get('/perfil/:idUsuario', function(req, res){
        const perfilDAO = application.app.models.perfilDAO;
        const idUsuario = parseInt(req.params.idUsuario);
       
        perfilDAO.getPerfilByID(idUsuario, function(err, result){
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
        let perfilDAO = application.app.models.perfilDAO;
      
        const idUsuario = req.params.id;
        const nomecompleto = req.body.nomecompleto;
        const telefone = req.body.telefone;
        const pesoUsuario  = req.body.peso;
        const alturaUsuario = req.body.altura;  
        const modalidade = req.body.modalidade;
        const senha = req.body.senha;

        perfilDAO.updatedPerfil(idUsuario, nomecompleto, telefone, pesoUsuario, alturaUsuario, modalidade, senha);
        
        perfilDAO.getPerfilByID(idUsuario, function (err, result) {
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