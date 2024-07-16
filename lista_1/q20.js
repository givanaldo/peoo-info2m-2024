function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;    
    const senha2 = document.getElementById("senha2").value;
    
    const regex = /^(?=.*[a-zA-Z\d]).{8,}$/;
    let resultado = document.getElementById("resultado");

    if (!nome)
        resultado.innerHTML = '<b>Preencha o nome!</b>';
    else if (!email)
        resultado.innerHTML = '<b>Preencha o e-mail!</b>';
    else if (!senha1 || !senha2)
        resultado.innerHTML = '<b>Preencha a senha!</b>';
    else if (senha1 != senha2)
        resultado.innerHTML = '<b>Senhas divergentes!</b>';
    else if (!email.includes('@') || !email.includes('.'))
        resultado.innerHTML = '<b>E-mail inválido!</b>';
    else if (!regex.test(senha1))
        resultado.innerHTML = '<b>Senha não segue as regras!</b>';
    else {
        resultado.innerHTML = '<b>Cadastro realizado com sucesso!</b>';
    }
}