class Livro {
    private _titulo : string;
    private _autor : string;
    private _preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }

    get preco() {
        return this._preco;
    }
    set preco(novo_preco : number) {
        if (novo_preco >= 0)
            this._preco = novo_preco;
        else 
            console.log("Não permitido valor negativo!");
    }

    descricao() : string {
        return `Livro: ${this._titulo}\nAutor: ${this._autor}\nPreço: R$ ${this._preco.toFixed(2)}`;    }
}

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);

let livros : Livro[] = [livro1, livro2, livro3];
livros.forEach(livro => {
    console.log(livro.descricao());
    console.log("------------");
});

livro2.preco = -1.99;
console.log(livro2.descricao());