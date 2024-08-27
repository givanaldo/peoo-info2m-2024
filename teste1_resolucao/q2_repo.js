function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = document.getElementById('resultado');

    let imc = peso / (altura ** 2);
    let categoria;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 25) {
        categoria = 'Peso normal';
    } else if (imc < 30) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>Categoria: ' + categoria;
}