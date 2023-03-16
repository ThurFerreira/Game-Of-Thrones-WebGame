const mongoclient = require('mongoose')

var dataBaseAccess = function(){

	mongoclient.connect("mongodb://localhost/got")
	.then(() => {console.log("Conexão com o bd estabelecida")})
	.catch((error) => console.log("Erro na conexão com o banco de dados: " + error))

	return mongoclient
}

module.exports = function(){
	return dataBaseAccess
}