function exibir_feriados() {
    const ano = document.getElementById("ano").value;
    const resultado = document.getElementById("resultado");
    
    // Limpa resultados anteriores
    resultado.innerHTML = '';

    // Valida a entrada do ano
    if (!ano || ano < 1900 || ano > 2100) {
        resultado.innerHTML = '<p style="color: red;">Por favor, insira um ano válido entre 1900 e 2100.</p>';
        return;
    }

    // Faz a requisição para a API BrasilAPI
    fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível carregar os feriados.');
            }
            return response.json();
        })
        .then(data => {
            // Processa os feriados
            const totalFeriados = data.length;
            const feriadosPorMes = Array(12).fill(0);
            const feriadosDetalhadosPorMes = Array.from({ length: 12 }, () => []);

            data.forEach(feriado => {
                const data = new Date(feriado.date);
                const dia = data.getUTCDate(); // Extrai o dia corretamente
                const mes = data.getUTCMonth(); // O mês ainda é 0-indexado
                feriadosPorMes[mes]++;
                feriadosDetalhadosPorMes[mes].push(`${dia} - ${feriado.name}`);
            });

            resultado.innerHTML = `<h2>Feriados Nacionais de ${ano}</h2>`;
            resultado.innerHTML += `<p>Total de feriados: ${totalFeriados}</p>`;

            const meses = [
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            
            meses.forEach((mes, index) => {
                if (feriadosPorMes[index] > 0) {
                    resultado.innerHTML += `<h3>${mes} (${feriadosPorMes[index]} feriado(s))</h3>`;
                    resultado.innerHTML += '<ul>';
                    feriadosDetalhadosPorMes[index].forEach(feriado => {
                        resultado.innerHTML += `<li>${feriado}</li>`;
                    });
                    resultado.innerHTML += '</ul>';
                }
            });
        })
        .catch(error => {
            resultado.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}
