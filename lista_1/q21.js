function adicionar() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const categoria = document.getElementById('categoria').value;
    const descricao = document.getElementById('descricao').value;

    if (!nome || !preco || !categoria || !descricao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let linha = document.getElementById('tabelaProdutos').insertRow();
    linha.insertCell(0).textContent = nome;
    linha.insertCell(1).textContent = preco;
    linha.insertCell(2).textContent = categoria;
    linha.insertCell(3).textContent = descricao;

    document.getElementById('formProduto').reset();    
}