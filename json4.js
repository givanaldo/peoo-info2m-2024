// Uma API pública de exemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Requisição para a API
fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		for (user of data) {
			console.log("ID: ", user.id);
			console.log(`Nome: ${user.name} (${user.username})`);
			console.log('Email:', user.email);
			console.log('Empresa:', user.company.name);
			console.log('---');
		};
	})
	.catch(error => {
		console.error('Erro ao obter dados:', error);
});
	