// Node Document

const express=require('express');
const app=express();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('../'));
app.get('/index', function (req, res) {
   res.sendFile("/home/caue/can/processo-seletivo-2018-2/Website-Project/index.html" );

})

app.post('/index#cadastro/nodem', urlencodedParser , function (req, res) {
    const nodemailer=require('nodemailer');
      
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'SODM.Software@gmail.com',
            pass: 'sodm1234'
        }
    });
          
    var mailOptions = {
        from: 'SODM.Software@gmail.com',
        to: req.body.cemail,
        subject: "Conta Criada com sucesso em UTFPR-CP Eventos",
        text: "\n\tDados do Cadastro:\n\nNome:"+req.body.cnome+"\nUsuário:"+req.body.cusuario+"Senha:"+req.body.csenha
    };
          
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }); 
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
 
    console.log("Servidor rodando em http://localhost%s%s", host, port)
})