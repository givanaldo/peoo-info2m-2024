function show_posts() {
    let post_id = 1;
    let url_comments = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;

    fetch(url_comments)
      .then(response => response.json())
      .then(json_data => {
        console.log(`Post ID: ${post_id}\n=======`);
        json_data.forEach(comment => {
            console.log(`#${comment.id}`);
            console.log(`E-mail: ${comment.email}`);
            console.log(`Título: ${comment.name}`);
            console.log(`Texto: ${comment.body}`);
            console.log('');
        });
      });
}

show_posts();