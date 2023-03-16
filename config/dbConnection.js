/*importar DB*/
var mongo = require('mongodb')

module.exports = function(){
    //mongo.db('- database name, 2- connection object(address and authentication), 3- extra configurations)
    var dataBaseAccess = new mongo.Db('got', new mongo.Server('localhost', 27017, {}), {})

    return dataBaseAccess
}