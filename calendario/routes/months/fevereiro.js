const routes = require('express').Router();

var url = 'mongodb://localhost:27017/events';

var eventsModel = require('../../model/events');


//LISTA EVENTO
routes.get('/', (req, res, next) => {
	eventsModel.find((err, events) => {
		
		if(err) throw err;
		res.render('fevereiro', {events: events, title: 'Fevereiro'});
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
			res.redirect('/');
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
	res.redirect('/');
});

//DELETA EVENTO

routes.get('/delete/:id', (req, res, next) => {
	
	let idEvent = req.params.id;

	eventsModel.remove({_id: idEvent }, (err)=>{
		if(err) throw err;
		res.redirect('/');
	})
});

module.exports = routes;