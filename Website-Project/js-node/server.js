// Node Document

var express = require('express');
var app = express();

require('./config/database');

app.use(express.static('../'));

app.get('/index', function (req, res) {
   res.sendFile("/home/caue/can/processo-seletivo-2018-2/Website-Project/index.html");

})

var server = app.listen(8080, function () {
    var port = server.address().port
 
    console.log("Servidor rodando na porta", port)
})

