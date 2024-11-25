class Livro {
    private titulo : string;
    private autor : string;
    private preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    alterarPreco(novo_preco : number) : void {
        if (novo_preco >= 0)
            this.preco = novo_preco;
        else 
            console.log("Não permitido valor negativo!");
    }

    descricao() : string {
        return `Livro: ${this.titulo}\nAutor: ${this.autor}\nPreço: R$ ${this.preco.toFixed(2)}`;    }
}

class Biblioteca {
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

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
let livro4 = new Livro("O Pequeno Príncipe", "Saint-Exupery", 30);

let vetor : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca(vetor);
biblio.listarLivros();

