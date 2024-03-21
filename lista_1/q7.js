function verificar() {
    let senha = document.getElementById("senha").value;
    if (senha.length > 5)
        document.getElementById("resultado").innerHTML = 
            "A senha possui 6 ou mais caracteres";
    else
    document.getElementById("resultado").innerHTML = 
            "Aprenda a digitar uma senha grande";
}