function repetir() {
    const frase = document.getElementById("frase").value;
    const n = document.getElementById("quantidade").value;

    document.getElementById("resultado").innerHTML = "";
    for (let i=0; i<n; i++) {
        document.getElementById("resultado").innerHTML = 
            `${frase} <br>`;
    }
}