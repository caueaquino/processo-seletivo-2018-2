// Node Document

function envEmailCad(cusuario, csenha, cnome, cemail){
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
    to: cemail,
    subject: "Conta Criada com sucesso em UTFPR-CP Eventos",
    text: "\n\tDados do Cadastro:\n\nNome:"+cnome+"\nUsuário:"+cusuario+"Senha:"+csenha
  };
    
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}