let post_id = 2;
let url = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;

fetch(url)
  .then((response) => response.json())
  .then((json) => list_comments(json));

function list_comments(json) {

}