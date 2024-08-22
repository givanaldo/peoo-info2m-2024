function listar() {
    let post_id = document.getElementById('post_id').value;
    let url = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => list_comments(json));
}
function list_comments(json) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    for (let comment of json) {
        resultado.innerHTML += `<hr>#ID: ${comment.id}<br>
            Nome: ${comment.name} <br>
            E-Mail: ${comment.email} <br>
            Texto: ${comment.body}`;
    }
}