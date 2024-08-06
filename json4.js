// Uma API pública de exemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Requisição para a API
fetch(apiUrl)
	.then(response => response.json()) // Converte a resposta em JSON
	.then(data => {
		data.forEach(user => {
			console.log('Nome:', user.name);
			console.log('Email:', user.email);
			console.log('Empresa:', user.company.name);
			console.log('---');
		});
	})
	.catch(error => {
		console.error('Erro ao obter dados:', error);
});
	