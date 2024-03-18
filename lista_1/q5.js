function contar() {
    let texto = document.getElementById('texto').value;
    let letra = document.getElementById('letra').value;
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0;
    for (let i = 0; i < texto.length; i++)
        if (texto[i] === letra)
            contador++;

    document.getElementById('resultado').innerHTML = `A letra <b>${letra}</b> aparece <b>${contador} vezes</b> no texto.`;
}
