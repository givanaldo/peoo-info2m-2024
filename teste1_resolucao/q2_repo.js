function imc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const valorIMC = peso / altura**2;
    document.getElementById("resultado").innerHTML = 
                `Seu IMC é: ${valorIMC.toFixed(2)}`;
    let categoria = document.getElementById("categoria");
    if (valorIMC < 18.5)
        categoria.innerHTML = 'Categoria: Abaixo do peso';
    else if (valorIMC < 24.9)
        categoria.innerHTML = 'Categoria: Peso normal';
    else if (valorIMC < 29.9)
        categoria.innerHTML = 'Categoria: Sobrepeso';
    else
        categoria.innerHTML = 'Categoria: Obesidade';

}