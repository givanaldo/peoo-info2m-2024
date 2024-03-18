function validarEmail() {
    let email = document.getElementById('email').value;
    if (email.includes('@') && email.includes('.'))
        document.getElementById('mensagem').innerHTML = 'E-mail válido.';
    else
        document.getElementById('mensagem').innerHTML = 'E-mail inválido.';
}
