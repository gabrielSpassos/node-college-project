module.exports = function(application){

    const connectionMysql = application.config.dbMysql();

    this.getPerfilByID = function(connectionMysql, id, callback){
        return connectionMysql.query('SELECT u.cpf_usuario, u.nomecompleto, u.telefone, u.peso, u.altura, tm.nome_modalidade, tm.valor FROM usuario u JOIN tipo_modalidade tm ON tm.id_modalidade = u.modalidade WHERE u.cpf_usuario = '.concat(id), callback);
    }


    this.updatedPerfil = function (connectionMysql, id, nomecompleto, telefone, peso, altura, modalidade, senha, callback) {
        return connectionMysql.query(`update usuario set nomecompleto = '${nomecompleto}', telefone = '${telefone}', peso = '${peso}', altura = '${altura}', modalidade = '${modalidade}' ,senha = '${senha}' where usuario.cpf_usuario = '${id}';`, callback);
        console.log("Passei por aqui");

    };

    return this;
}