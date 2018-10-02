// Javascript Document

function login(){
    if((document.getElementById("lusuario").value=="") || (document.getElementById("lsenha").value=="")){
        alert("Erro Login, Campo(s) em branco!");
    }else if(false){
        alert("Senha ou(e) Usuário inválido(s)!");
    }else{
        pesLogin();
        alert("Informações\nUsuario:"+lusuario+"\nSenha:"+lsenha);  
    }
    cleanLogin();
}

function pesLogin(){
    lusuario=document.getElementById("lusuario").value;
    lsenha=document.getElementById("lsenha").value;
}


function cleanLogin(){
    document.getElementById("lusuario").value="";
    document.getElementById("lsenha").value="";
}

function cadastro(){
    if((document.getElementById("cusuario").value=="") || (document.getElementById("csenha").value=="") || (document.getElementById("cnome").value=="") || (document.getElementById("cemail").value=="")){
        alert("Impossível concluir cadastro, campo(s) em branco!");        
    }else if(false){
        alert("Usuário ou(e) Email inválido(s)!");
    }else{
        pesCadastro();
        alert("Informações\nUsuário: "+cusuario+"\nSenha: "+csenha+"\nNome: "+cnome+"\nEmail: "+cemail);
        document.getElementsByid('http://localhost:8080/index#cadastro/nodem');
    }
    cleanCadastro();
}

function pesCadastro(){
    cusuario=document.getElementById("cusuario").value;
    csenha=document.getElementById("csenha").value;
    cnome=document.getElementById("cnome").value;
    cemail=document.getElementById("cemail").value;
}

function cleanCadastro(){
    document.getElementById("cusuario").value="";
    document.getElementById("csenha").value="";
    document.getElementById("cnome").value="";
    document.getElementById("cemail").value="";
}
