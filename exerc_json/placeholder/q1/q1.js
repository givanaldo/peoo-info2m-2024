const url_posts = 'https://jsonplaceholder.typicode.com/posts';
const url_users = 'https://jsonplaceholder.typicode.com/users';

let usuarios = ["###"];

fetch(url_users)
    .then(response => response.json())
    .then(users => criar_vetor(users));

function criar_vetor(users) {
    for (let user of users)
        usuarios.push(user.name);
}

fetch (url_posts)
    .then(response => response.json())
    .then(posts => exibir_posts(posts));

function exibir_posts(posts) {
    let postagens = document.getElementById('postagens');
    postagens.innerHTML = '';
    for (let post of posts) {
        let postagem = document.createElement('div');
        postagem.innerHTML = `<p>#${post.id}
                            (Usuário: ${usuarios[post.userId]})<br>
                            <b>Título:</b> ${post.title}<br>
                            <b>Texto:</b> ${post.body}</p>`;
        postagens.appendChild(postagem);
    }
}