import { Livro } from './Livro';
import { Biblioteca } from './Biblioteca';
import { LivroDigital } from './LivroDigital';

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
let livro4 = new Livro("O Pequeno Príncipe", "Saint-Exupery", 30);

let vetor : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca(vetor);
biblio.listarLivros();

let livroDigital = new LivroDigital("1984", "George Orwell", 9.90, "PDF");
biblio.adicionarLivro(livroDigital);
biblio.listarLivros();