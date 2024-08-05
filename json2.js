// URL de uma API pública de exemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Fazendo uma requisição para a API
fetch(apiUrl)
	.then(response => response.json()) // Converte a resposta em JSON
	.then(data => {
		// Iterando sobre os dados recebidos
		data.forEach(user => {
			console.log('Nome:', user.name);
			console.log('Email:', user.email);
			console.log('---');
		});
	})
	.catch(error => {
		console.error('Erro ao obter dados:', error);
});