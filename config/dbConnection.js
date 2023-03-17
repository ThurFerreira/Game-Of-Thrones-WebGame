var mongoose = require('mongoose')

var dataBaseAccess = function () {

	var mongoDB = 'mongodb://localhost:27017/got';
	
	mongoose
		.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
		.then((result) => { // Successfully connected
			console.log('result');
		})
		.catch((err) => {
			// Catch any potential error
			// console.log(mongoose.version);
			console.log("Unable to connect to MongoDB. Error: ");
		});

	// mongoclient.connect("mongodb://localhost/got", () => {})
	// .then(() => {console.log("Conexão com o bd estabelecida com sucesso")})
	// .catch((error) => console.log("Erro na conexão com o banco de dados: " + error))

	//definindo o model
	var userSchema = new mongoose.Schema({
		nome: String,
		usuario: String,
		senha: String,
		casa: String
	},{collection: 'users'})

	// var newSchema = mongoose.model('usuarios', userSchema)

	
	// let usuario = {
	// 	nome: 'String',
	// 	usuario: 'String',
	// 	senha: 'String',
	// 	casa: 'String'
	// }

	// //const connection = application.config.dbConnection();

	// var userSchema = mongoose.model('usuarios', userSchema)
	
	// console.log("criou modelo")
	
	// const newInsert = new userSchema(usuario)
	// 	.save()
	// 	.then(() => console.log("Usuario inserido com sucesso"))
	// 	.catch((error) => console.log("Falha ao inserir usuario no banco de dados"))
	


	return { Mongoose: mongoose, UserSchema: userSchema }

}

//dataBaseAccess();

module.exports = function () {
	return dataBaseAccess
}