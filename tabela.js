function cadastrar() {
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const categoria = document.getElementById("categoria").value;

    let linha = document.getElementById("tabela").insertRow();
    linha.insertCell(0).textContent = nome;
    linha.insertCell(1).textContent = preco;
    linha.insertCell(2).textContent = categoria;

    document.getElementById('formProduto').reset();    
}