const url = 'https://jsonplaceholder.typicode.com/posts';

const new_post = {
    userId: 1,
    title: 'Testando novo post na aula de PEOO',
    body: 'Este é o conteúdo do meu novo post. Vamos ver se funciona.'
};

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  body: JSON.stringify(new_post)
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log('Novo post criado:', data));
