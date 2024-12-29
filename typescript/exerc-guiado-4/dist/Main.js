import { Livro } from './Livro.js';
import { Revista } from './Revista.js';
import { Usuario } from './Usuario.js';
import { Biblioteca } from './Biblioteca.js';

const livro1 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const revista1 = new Revista("National Geographic", 2024, "NG Media", 150);
const usuario1 = new Usuario("Maria Silva", 1);
const biblioteca = new Biblioteca();

biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(revista1);
biblioteca.registrarUsuario(usuario1);
usuario1.emprestarItem(livro1);
biblioteca.emprestarItem(usuario1, revista1);
