module.exports = function(app){

    app.get('/perfil', function(req, res){
        res.render('perfil/perfil')
    });

}