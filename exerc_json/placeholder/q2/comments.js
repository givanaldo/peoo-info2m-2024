const url_posts = 'https://jsonplaceholder.typicode.com/posts';
fetch(url_posts)
  .then(response => response.json())
  .then(posts => list_posts(posts));

function list_posts(posts) {
  let select = document.getElementById('posts');
  for (let post of posts) {
    let option = new Option(post.title, post.id);
    select.options[select.options.length] = option;
  }
}

function show_comments() {
  let post_id = document.getElementById('posts').value;
  let url_comments = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;
  
  fetch(url_comments)
    .then(response => response.json())
    .then(comments => {
        let result = document.getElementById('result');
        result.innerHTML ='';
        comments.forEach(comment => {
          let div = document.createElement("div");
          div.innerHTML = `<hr>#${comment.id} <br>
            E-mail: ${comment.email} <br>
            Título: ${comment.name} <br>
            Texto: ${comment.body} <br><hr>`; 
          result.appendChild(div);
        });
    });
}
