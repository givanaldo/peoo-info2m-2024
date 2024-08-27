const userId = 1;

const url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

fetch(url)
  .then(response => response.json())
  .then(todos => {
    const todo_list = document.getElementById('todo-list');

    todos.forEach(todo => {
      const item = document.createElement('li');
      item.textContent = todo.title;

      if (todo.completed) {
        item.style.textDecoration = 'line-through';
        item.style.color = 'green';
      } 
      else {
        item.style.color = 'red';
      }
      
      todo_list.appendChild(item);
    });
  });
