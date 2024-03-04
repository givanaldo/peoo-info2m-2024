function imc() {
    const massa = document.getElementById("massa").value;
    const altura = document.querySelector("#altura").value;

    const resultado = massa / (altura ** 2);
    
    document.getElementById("resultado").innerHTML =
        "Valor do IMC = " + resultado.toFixed(2);
}