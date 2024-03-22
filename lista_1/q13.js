function remover() {
    const frase = document.getElementById("frase").value;
    const nova = frase.split(' ').join('');
    console.log(frase);
    console.log(nova);
    document.getElementById("resultado").innerHTML = nova;
}