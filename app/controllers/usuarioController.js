module.exports = function(application){

    const usuarioDAO = application.app.models.usuarioDAO;

        this.getUsuarioTreinosByIdUsuariosAndIdDia =  function (idUsuario, idDia) { 

        const getUsuario = async() => {
        await usuarioDAO.getTreinoUsuarioByIdUsuarioAndIdDia(idUsuario, idDia, function(error, response){
            console.log(response)
            return response
        }) }

        return getUsuario()

    }

    return this;
}