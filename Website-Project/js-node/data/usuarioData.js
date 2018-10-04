
const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";

UsuarioDAO.insertOne=function(user) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        var dbo = db.db("mydb");
        dbo.collection("Usuarios").insertOne(user, function(err, res) {
            if(err) throw err;

            console.log("Usuario Cadastrado!");
            db.close();
        });
    });
}

UsuarioDAO.findUsuario=function(usuario) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        var dbo = db.db("mydb");
        var query={"usuario":usuario};
        dbo.collection("Usuarios").findOne(query, function(err, projection) {
            if(err) throw err;

            console.log(projection.usuario);
            console.log(projection.senha);
            console.log(projection.nome);
            console.log(projection.email);
            db.close();
        });
    });
}

UsuarioDAO.findEmail=function(email) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        var dbo = db.db("mydb");
        var query={"email":email};
        dbo.collection("Usuarios").findOne(query, function(err, projection) {
            if(err) throw err;
            
            console.log(projection.usuario);
            console.log(projection.senha);
            console.log(projection.nome);
            console.log(projection.email);
            db.close();
        });
    });
}

module.exports=function(){
    return UsuarioDAO;
}