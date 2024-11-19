import { Livro } from "./Livro";
import { LivroDigital } from "./LivroDigital";
import { Biblioteca } from "./Biblioteca";

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
let livro4 = new Livro("O Pequeno Príncipe", "Saint-Exupery", 30);
let livro5 = new LivroDigital("O Pequeno Príncipe", "Saint-Exupery", 9.90, "ePUB");

let vetor : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca();
biblio.adicionarLivros(vetor);
biblio.adicionarLivro(livro5);
biblio.listarLivros();
