function show_posts() {
    const url_posts = 'https://jsonplaceholder.typicode.com/posts';
    const url_users = 'https://jsonplaceholder.typicode.com/users';

    let users = ['usuários'];

    fetch(url_users)
      .then(response => response.json())
      .then(json_data => {
        json_data.forEach(user => {
            users.push(user.name);
        });
      });


    fetch(url_posts)
      .then(response => response.json())
      .then(json_data => {
        json_data.forEach(post => {
            console.log(`#${post.id}`);
            console.log(`Usuário: ${users[post.userId]}`);
            console.log(`Título: ${post.title}`);
            console.log(`Texto: ${post.body}`);
            console.log('');
        });
      });
}

show_posts();