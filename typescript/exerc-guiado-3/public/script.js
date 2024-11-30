import { Livro } from '../dist/Livro.js';
import { Revista } from '../dist/Revista.js';
import { Usuario } from '../dist/Usuario.js';
import { Biblioteca } from '../dist/Biblioteca.js';

const biblioteca = new Biblioteca();
const livro1 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const revista1 = new Revista("National Geographic", 2024, "NG Media", 150);
const usuario1 = new Usuario("Maria Silva", 1);

biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(revista1);
biblioteca.registrarUsuario(usuario1);

function exibirItens() {
  const bibliotecaDiv = document.getElementById('biblioteca');
  if (bibliotecaDiv) {
    bibliotecaDiv.innerHTML = `
      <h2>Itens Disponíveis</h2>
      <p>${livro1.exibirInformacoes()}</p>
      <p>${revista1.exibirInformacoes()}</p>
    `;
  }
}

// Chama a função para exibir os itens
exibirItens();