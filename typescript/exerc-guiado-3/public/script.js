import { Livro } from '../dist/Livro.js';
import { Revista } from '../dist/Revista.js';
import { Usuario } from '../dist/Usuario.js';
import { Biblioteca } from '../dist/Biblioteca.js';

const livro1 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const livro2 = new Livro("1984", 2016, "George Orwell", 368);
const livro3 = new Livro("Admirável mundo novo", 2006, "Aldous Huxley", 288);
const livro4 = new Livro("O Pequeno Príncipe", 1952, "Antoine de Saint-Exupéry", 96);

const revista1 = new Revista("National Geographic", 2024, "NG Media", 150);

const usuario1 = new Usuario("Maria Silva", 1);

const biblioteca = new Biblioteca();

biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(livro2);
biblioteca.adicionarItem(livro3);
biblioteca.adicionarItem(livro4);

biblioteca.adicionarItem(revista1);

biblioteca.registrarUsuario(usuario1);

function exibirItens() {
  const bibliotecaDiv = document.getElementById('biblioteca');
  if (bibliotecaDiv) {
    bibliotecaDiv.innerHTML = `
      <h2>Itens Disponíveis</h2>
      <p>${livro1.exibirInformacoes()}</p>
      <p>${livro2.exibirInformacoes()}</p>
      <p>${livro3.exibirInformacoes()}</p>
      <p>${livro4.exibirInformacoes()}</p>
      <p>${revista1.exibirInformacoes()}</p>
    `;
  }
}

function exibirItensNode() {
  console.log(livro1.exibirInformacoes());
  console.log(revista1.exibirInformacoes());
}

// Chama a função para exibir os itens
exibirItens();