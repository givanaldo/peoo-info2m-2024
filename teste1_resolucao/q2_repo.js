function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultado = document.getElementById('resultado');

    var imc = peso / (altura * altura);
    var categoria;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>Categoria: ' + categoria;
}
