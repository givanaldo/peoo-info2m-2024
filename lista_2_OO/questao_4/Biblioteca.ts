import { Livro } from './Livro';

export class Biblioteca {
    private livros: Livro[] = [];

    constructor(livros? : Livro[]) {
        if (livros) {
            livros.forEach(livro => {
                this.livros.push(livro);
            });     
        }   
    }

    adicionarLivro(livro: Livro) : void {
        this.livros.push(livro);
        console.log("Livro adicionado.");
    }

    adicionarLivros(vetor: Livro[]) : void {
        vetor.forEach(livro => {
            this.livros.push(livro);
        });        
        console.log("Livros adicionado.");
    }

    listarLivros() : void {
        console.log("LISTAGEM DOS LIVROS:");
        this.livros.forEach(livro => {
            console.log("- " + livro.descricao());
        });
    }
}