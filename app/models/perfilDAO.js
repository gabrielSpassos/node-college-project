module.exports = function(application){

    this.getPerfilByID = function(connectionMysql, id, callback){
        return connectionMysql.query('SELECT u.cpf_usuario, u.nomecompleto, u.telefone, u.peso, u.altura, tm.nome_modalidade, tm.valor FROM usuario u JOIN tipo_modalidade tm ON tm.id_modalidade = u.modalidade WHERE u.cpf_usuario = '.concat(id), callback);
    }


    this.updatedPerfil = function (connectionMysql, nomecompleto, peso, altura, modalidade, senha, id, callback) {
        return connectionMysql.query(`update usuario set nomecompleto = '${nomecompleto}', peso = '${peso}', altura = '${altura}', senha = '${senha}' where usuario.cpf_usuario = '${id}';`, callback);
        console.log("Passei por aqui");

    };

    return this;
}