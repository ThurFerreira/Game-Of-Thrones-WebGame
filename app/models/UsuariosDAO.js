function UsuariosDAO(application, connection) {
	this._connection = connection();
	this._application = application();
	this._db = this._application.config.dbConnection
}

// UsuariosDAO.prototype.inserirUsuario = function (usuario) {
// 	var MongoClient = require('mongodb').MongoClient;
// 	var url = "mongodb://localhost:27017/";

// 	MongoClient.connect(url, function (err, db) {
// 		if (err) throw err;
// 		var dbo = db.db("got");
// 		dbo.collection("usuarios").insertOne(usuario, function (err, res) {
// 			if (err) throw err;
// 			console.log("1 document inserted");
// 			db.close();
// 		});
// 	});

// 	// this._connection.open(function (err, mongoclient) {
// 	// 	mongoclient.collection("usuarios", function (err, collection) {
// 	// 		collection.insert(usuario);

// 	// 		mongoclient.close();
// 	// 	});
// 	// });
// }

UsuariosDAO.prototype.inserirUsuario = function (usuario) {

	console.log(usuario)
	
	var userSchema = this._connection.Mongoose.model('usuarios', this._db.UserSchema)
	
	const newInsert = new userSchema(usuario).save()
		.then(() => console.log("Usuario inserido com sucesso"))
		.catch((error) => console.log("Falha ao inserir usuario no banco de dados"))
	}

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
	this._connection.open(function (err, mongoclient) {
		mongoclient.collection("usuarios", function (err, collection) {
			collection.find(usuario).toArray(function (err, result) {

				if (result[0] != undefined) {

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if (req.session.autorizado) {
					res.redirect("jogo");
				} else {
					res.render("index", { validacao: {} });
				}

			});
			mongoclient.close();
		});
	});
}


module.exports = function () {
	return UsuariosDAO;
}