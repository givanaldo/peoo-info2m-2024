function alterar() {
    const texto = document.getElementById("texto").value;
    const p1 = document.getElementById("p1").value;
    const p2 = document.getElementById("p2").value;    
    // criar vetor
    let vetor = texto.split(' ');
    for (let i=0; i<vetor.length; i++) {
        if (vetor[i] == p1)
            vetor[i] = p2;
    }
    // juntar o vetor em uma string
    const nova = vetor.join(' ');
    document.getElementById("resultado").innerHTML = nova;
}