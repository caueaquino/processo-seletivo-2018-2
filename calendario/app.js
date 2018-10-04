const express = require('express');
const routes = require('./routes');
const hbs = require( 'express-handlebars' )
const mongo = require('mongodb').MongoClient;
//database pt.1
const mongoose = require("mongoose");
const bodyParser =require("body-parser");

mongoose.connect("mongodb://localhost:27017/events", { useNewUrlParser: true});
mongoose.connection.on('connected', ()=>{
  console.log("Conectado no banco de dados...");
});
// end database pt.1

//months
//var feb = require('./routes/months/fevereiro');


var app = express();



app.use(express.static('../views'));

app.get('/index', function(req,res){
	res.sendFile(__dirname + '/views/homepage.html');
}); 

app.get('/meses', function(req,res){
	res.sendFile(__dirname + '/views/mesescalendarios.html');
}); 

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public/'));
app.use('/', routes);


//months
//app.use('/fevereiro', feb);

app.engine( 'hbs', hbs({ 
	extname: 'hbs', 
	// defaultLayout: 'index', 
	layoutsDir: __dirname + '/views/',
	partialsDir: __dirname + '/views/partials/'
}));
  
app.set( 'view engine', 'hbs' );

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
