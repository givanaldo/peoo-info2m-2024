function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;    
    const senha2 = document.getElementById("senha2").value;
    
    const regex = /^(?=.*[a-zA-Z\d]).{8,}$/;

    if (!nome)
        document.getElementById("resultado").innerHTML = '<b>Preencha o nome!</b>';
    else if (!email)
        document.getElementById("resultado").innerHTML = '<b>Preencha o e-mail!</b>';
    else if (!senha1 || !senha2)
        document.getElementById("resultado").innerHTML = '<b>Preencha a senha!</b>';
    else if (senha1 != senha2)
        document.getElementById("resultado").innerHTML = '<b>Senhas divergentes!</b>';
    else if (!email.includes('@') || !email.includes('.'))
        document.getElementById("resultado").innerHTML = '<b>E-mail inválido!</b>';
    else if (!regex.test(senha1))
        document.getElementById("resultado").innerHTML = '<b>Senha inválida!</b>';
    else {
        document.getElementById("resultado").innerHTML = '<b>Cadastro realizado com sucesso!</b>';
    }
}