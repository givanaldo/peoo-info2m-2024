function substituir() {
    let frase = document.getElementById("frase").value;
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    let vetor = frase.split(" ");
    for (let i=0; i<vetor.length; i++) {
        if (vetor[i] == p1) {
            vetor[i] = p2;
        }
    }
    let nova = vetor.join(" ");
    document.getElementById("resultado").innerHTML = nova;
}