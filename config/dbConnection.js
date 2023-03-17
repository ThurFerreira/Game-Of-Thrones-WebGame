var mongoose = require('mongoose')

var dataBaseAccess = function(){

	var mongoDB = 'mongodb://localhost/got';
	mongoose.connect(mongoDB, {useNewUrlParser: true})

	var db = mongoose.connection

	db.on('error', console.error.bind(console, 'MongoDB connection error:'));

	// mongoclient.connect("mongodb://localhost/got", () => {})
	// .then(() => {console.log("Conexão com o bd estabelecida com sucesso")})
	// .catch((error) => console.log("Erro na conexão com o banco de dados: " + error))

	//definindo o model
	var Schema = mongoose.Schema
	var userSchema = new Schema({		//nome,usuario,senha,casa
		nome: String,
		usuario: String,
		senha: String,
		casa: String
	})

	return {Mongoose: mongoose, UserSchema: userSchema}
}

module.exports = function(){
	return dataBaseAccess
}