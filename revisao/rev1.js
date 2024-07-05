// Pedir nome e sobrenome e exibir juntos
function exibir_nome() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    
    let nomecompleto = nome + ' ' + sobrenome;
    
    document.getElementById('nomecompleto').innerHTML = nomecompleto;
}