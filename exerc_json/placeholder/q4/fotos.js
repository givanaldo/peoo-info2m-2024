const id_album = 5;

const url = `https://jsonplaceholder.typicode.com/albums/${id_album}/photos`;

fetch(url)
  .then(response => response.json())
  .then(fotos => {
    const galeria = document.getElementById('galeria');
    fotos.forEach(foto => {
      const div_photo = document.createElement('div');
      const img = document.createElement('img');
      const title = document.createElement('p');

      img.src = foto.thumbnailUrl;
      img.alt = foto.title;
      title.textContent = foto.title;

      div_photo.appendChild(img);
      div_photo.appendChild(title);
      galeria.appendChild(div_photo);
    });
  });
