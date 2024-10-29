function exibir_nobel() {
    const ano = document.getElementById("ano").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = '';

    if (!ano) {
        resultado.innerHTML = '<p>Por favor, insira um ano válido.</p>';
        return;
    }

    fetch(`https://api.nobelprize.org/v1/prize.json?year=${ano}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados");
            }
            return response.json();
        })
        .then(data => {
            if (data.prizes.length === 0 || ano < 1901) {
                resultado.innerHTML = `<p>Não foram encontrados prêmios no ano de ${ano}.</p>`;
            } else {
                data.prizes.forEach(prize => {
                    const categoria = prize.category;
                    const laureados = prize.laureates.map(laureate => laureate.firstname + " " + laureate.surname).join(', ');
                    const motivacao = prize.laureates.map(laurete => laurete.motivation).join(', ');

                    // Exibe o resultado formatado
                    resultado.innerHTML += `
                        <div>
                            <p><strong>Categoria:</strong> ${categoria[0].toUpperCase() + categoria.slice(1)}</p>
                            <p><strong>Laureado(s):</strong> ${laureados}</p>
                            <p><strong>Motivação:</strong> ${motivacao}</p>
                        </div>
                        <hr>
                    `;
                });
            }
        })
        .catch(error => {
            resultado.innerHTML = `<p>Erro ao buscar os dados: ${error.message}</p>`;
        });
}
