function ordenar() {
    let vetor_txt = document.querySelector("#vetor").value;
    let vetor = vetor_txt.split(" ");
    const ordem = document.querySelector("input[name='ordem']:checked").value;
    if (ordem == 'crescente')
        document.getElementById("resultado").innerHTML = 
            vetor.sort((a, b) => a - b).join("  ");
    else
        document.getElementById("resultado").innerHTML = 
            vetor.sort((b, a) => a - b).join("  ");
}