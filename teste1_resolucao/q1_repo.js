function ehPrimo(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function verificarPrimo() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');
    var primos = document.getElementById('primos');
    var listaPrimos = [];

    if (ehPrimo(numero)) {
        resultado.innerHTML = 'O número ' + numero + ' é primo.';
    } else {
        resultado.innerHTML = 'O número ' + numero + ' não é primo.';
    }

    for (var i = 2; i <= numero; i++) {
        if (ehPrimo(i)) {
            listaPrimos.push(i);
        }
    }

    primos.innerHTML = 'Números primos até ' + numero + ': ' + listaPrimos.join(', ');
}