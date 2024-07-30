function primo(numero) {
    for (let i=2; i<numero; i++)
        if (numero % i === 0)
            return false;
    return true;
}

function listar() {
    let num = document.getElementById("numero").value;
    let lista = [];
    for (let n=2; n<=num; n++)
        if (primo(n))
            lista.push(n);
    document.getElementById("resultado").innerHTML = 
                `Primos: ${lista.join(', ')}`;
}
