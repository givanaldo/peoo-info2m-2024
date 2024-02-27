function submeter() {
    let confirma = confirm("Você confirma a ação?");
    if (confirma == true) {
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        document.getElementById("resultado").innerHTML = 
            "<h3>Informações Recebidas</h3>" +
            "<p>Nome: " + nome + "</p>" +
            "<p>E-mail: " + email + "</p>";
    }
    else {
        document.getElementById("resultado").innerHTML = 
            "<h2>Ação cancelada</h2>";
    }
}
