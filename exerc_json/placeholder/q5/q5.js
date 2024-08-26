const url_users = 'https://jsonplaceholder.typicode.com/users';
fetch(url_users)
  .then(response => response.json())
  .then(users => list_users(users));

function list_users(users) {
  let select = document.getElementById('user_id');
  for (let user of users) {
    let option = new Option(user.name, user.id);
    select.options[select.options.length] = option;
  }
}

function listar() {
    const user = document.getElementById('user_id').value;
    const url = `https://jsonplaceholder.typicode.com/users/${user}/todos`;
    
    fetch(url)
        .then(response => response.json())
        .then(lista => listar_atividades(lista));
}

function listar_atividades(lista) {
    let atividades = document.getElementById('atividades');
    atividades.innerHTML = '';
    for (let todo of lista) {
        let item = document.createElement('li');
        item.innerHTML = todo.title;
        if (todo.completed) {
            item.style.color = 'green';
            item.style.textDecoration = 'line-through';
        }
        else 
            item.style.color = 'red';
        atividades.appendChild(item);
    }
}