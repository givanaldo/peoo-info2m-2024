/* Crie uma classe Livro com os atributos titulo, 
autor e preco. Crie um método descricao que retorne 
uma string com o título, autor e preço do livro.
*/
class Livro {
    titulo : string;
    autor : string;
    preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    descricao() : string {
        return `Livro: ${this.titulo}\nAutor: ${this.autor}\nPreço: R$ ${this.preco.toFixed(2)}`;    }
}

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);

let livros : Livro[] = [livro1, livro2, livro3];
livros.forEach(livro => {
    console.log(livro.descricao());
    console.log("------------");
});

// Ação não desejada
livro2.preco = -1.99;
console.log(livro2.descricao());