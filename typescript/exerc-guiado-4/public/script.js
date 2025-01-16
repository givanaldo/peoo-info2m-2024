import { Livro } from '../dist/Livro.js';
import { Revista } from '../dist/Revista.js';
import { Usuario } from '../dist/Usuario.js';
import { Biblioteca } from '../dist/Biblioteca.js';

const livro1 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const livro2 = new Livro("1984", 2016, "George Orwell", 368);
const livro3 = new Livro("Admirável mundo novo", 2006, "Aldous Huxley", 288);
const livro4 = new Livro("O Pequeno Príncipe", 1952, "Antoine de Saint-Exupéry", 96);

const revista1 = new Revista("National Geographic", 2024, "NG Media", 150);
const revista2 = new Revista("National Geographic", 2024, "NG Media", 151);

const usuario1 = new Usuario("Maria Silva", 1);
const biblioteca = new Biblioteca();

biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(livro2);
biblioteca.adicionarItem(livro3);
biblioteca.adicionarItem(livro4);

biblioteca.adicionarItem(revista1);
biblioteca.adicionarItem(revista2);

biblioteca.registrarUsuario(usuario1);

function exibirItens() {
  const bibliotecaDiv = document.getElementById('biblioteca');
  if (bibliotecaDiv) {
    bibliotecaDiv.innerHTML = '';
    for (const item of biblioteca.itensDisponiveis)
      bibliotecaDiv.innerHTML += `<p>${item.exibirInformacoes()}</p>`;
  }
}

export function adicionarLivro() {
  const titulo = document.getElementById('tituloLivro').value;
  const ano = document.getElementById('anoLivro').value;
  const autor = document.getElementById('autor').value;
  const paginas = document.getElementById('paginas').value;

  const livro = new Livro(titulo, ano, autor, paginas);
  biblioteca.adicionarItem(livro);
  exibirItens();

  // Limpar os campos do formulário
  document.getElementById('tituloLivro').value = '';
  document.getElementById('anoLivro').value = '';
  document.getElementById('autor').value = '';
  document.getElementById('paginas').value = '';
}

export function adicionarRevista() {
  const titulo = document.getElementById('tituloRev').value;
  const ano = document.getElementById('anoRev').value;
  const editora = document.getElementById('editora').value;
  const edicao = document.getElementById('edicao').value;

  const revista = new Revista(titulo, ano, editora, edicao);
  biblioteca.adicionarItem(revista);
  exibirItens();

  // Limpar os campos do formulário
  document.getElementById('tituloRev').value = '';
  document.getElementById('anoRev').value = '';
  document.getElementById('editora').value = '';
  document.getElementById('edicao').value = '';
}

exibirItens();

// Adicionar eventos aos botões
document.getElementById('adicionarLivro').addEventListener('click', adicionarLivro);
document.getElementById('adicionarRevista').addEventListener('click', adicionarRevista);