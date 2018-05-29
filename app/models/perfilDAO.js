module.exports = function(){

    this.getPerfilByID = function(connectionMysql, id, callback){
        return connectionMysql.query('SELECT u.cpf_usuario, u.nomecompleto, u.telefone, u.peso, u.altura, tm.nome_modalidade, tm.valor FROM usuario u JOIN tipo_modalidade tm ON tm.id_modalidade = u.modalidade WHERE u.cpf_usuario = '.concat(id), callback);
    }

    return this;
}