//meio campo entre a view (rendeniza as paginas) e o banco de dados (insere dados ao DB)

module.exports.cadastro = function (application, req, res){
    res.render('cadastro', {validacao:{}});
}

module.exports.cadastrar = function (application, req, res){
    //controllers
    var dadosForm = req.body

    req.assert('nome', 'Nome nao pode ser vazio').notEmpty()
    req.assert('usuario', 'Usuario nao pode ser vazio').notEmpty()
    req.assert('senha', 'Senha nao pode ser vazio').notEmpty()
    req.assert('casa', 'Casa nao pode ser vazio').notEmpty()

    var errors = req.validationErrors()

    if(errors){
        res.render("cadastro", {validacao:errors})
        return;
    }

    //aplicar ao banco de dados (model)
    res.send('cadastrar informações')
}