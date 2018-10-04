const routes = require('express').Router();

var url = 'mongodb://localhost:27017/events';

var eventsModel = require('../model/events');




routes.insertOne=function(user) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        var dbo = db.eventsModel("cadastro");
        dbo.collection("Usuarios").insertOne(user, function(err, res) {
            if(err) throw err;

            console.log("Usuario Cadastrado!");
            db.close();
        });
    });
}
//LOGIN
routes.findUsuario=function(user) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        var dbo = db.eventsModel("cadastro");
        var query={"usuario":user};
        dbo.collection("Usuarios").findOne(query, function(err, projection) {
            if(err) throw err;

            console.log(projection.user);
            console.log(projection.password);
            console.log(projection.name);
            console.log(projection.email);
            db.close();
        });
    });
}
//RECUPERAÇÃO
routes.findEmail=function(email) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        var dbo = db.eventsModel("cadastro");
        var query={"email":email};
        dbo.collection("Usuarios").findOne(query, function(err, projection) {
            if(err) throw err;
            
			console.log(projection.user);
            console.log(projection.password);
            console.log(projection.name);
            console.log(projection.email);
            db.close();
        });
    });
}
//LOGIN USUARIO
routes.post('/login', (req, res, next) => {
	
	let newUser = new eventsModel({
		user: req.body.lusuario,
		password: req.body.lsenha
	});
	newEvent.save((err) => {
		if (err) {
			res.json(err);
		} else {
			res.redirect('/');
		}
	});
});
//REGISTRAR USUARIO
routes.post('/cadastro', (req, res, next) => {
	
	let newUser = new eventsModel({
		user: req.body.cusuario,
		password: req.body.csenha,
		name: req.body.cnome,
		email: req.body.cemail
	});
	newEvent.save((err) => {
		if (err) {
			res.json(err);
		} else {
			res.redirect('/');
		}
	});
});

//RECUPERAR DADOS
routes.post('/esqueceu', (req, res, next) => {
	
	let newUser = new eventsModel({
		email: req.body.remail
	});
	newEvent.save((err) => {
		if (err) {
			res.json(err);
		} else {
			res.redirect('/');
		}
	});
});
//////////////////////////////////////////////////////////////////////
//LISTA EVENTO
routes.get('/eventos', (req, res, next) => {
	eventsModel.find((err, events) => {
		
		if(err) throw err;
		res.render('index', {events: events, title: 'Janeiro'});
	});
});
//ADICIONAR EVENTO
routes.post('/add', (req, res, next) => {
	
	let newEvent = new eventsModel({
		dateOfEvent: req.body.dateOfEvent,
		typeOfEvent: req.body.typeOfEvent,
		descriptionOfEvent: req.body.descriptionOfEvent
	});
	newEvent.save((err) => {
		if (err) {
			res.json(err);
		} else {
			res.redirect('/eventos');
		}
	});
});

//EDITA EVENTO
routes.post('/edit', (req, res, next) => {
	
	var id = req.body.id;
	eventsModel.findById(id, function (err, newEvent) {
		if (err) {
			console.error("erro, nenhuma entrada encontrada!");
		}
		newEvent.dateOfEvent = req.body.dateOfEvent;
		newEvent.typeOfEvent = req.body.typeOfEvent;
		newEvent.descriptionOfEvent = req.body.descriptionOfEvent;
		newEvent.save();
	})
	res.redirect('/eventos');
});

//DELETA EVENTO

routes.get('/delete/:id', (req, res, next) => {
	
	let idEvent = req.params.id;

	eventsModel.remove({_id: idEvent }, (err)=>{
		if(err) throw err;
		res.redirect('/eventos');
	})
});

module.exports = routes;