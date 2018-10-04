// Node Document

exports.envEmailCad=function(pessoa){
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
    to: pessoa.cemail,
    subject: "Conta Criada com sucesso em UTFPR-CP Eventos",
    text: "\n\tDados do Cadastro:\n\nNome:"+pessoa.cnome+"\nUsuário:"+pessoa.cusuario+"Senha:"+pessoa.csenha
  };
    
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}

exports.envDadosConta=function(remail){
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