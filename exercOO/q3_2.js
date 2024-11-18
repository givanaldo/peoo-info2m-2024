var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.alterarPreco = function (novo_preco) {
        if (novo_preco >= 0)
            this.preco = novo_preco;
        else
            console.log("Não permitido valor negativo!");
    };
    Livro.prototype.descricao = function () {
        return "Livro: ".concat(this.titulo, "\nAutor: ").concat(this.autor, "\nPre\u00E7o: R$ ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        var _this = this;
        this.livros = [];
        livros.forEach(function (livro) {
            _this.livros.push(livro);
        });
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro adicionado.");
    };
    Biblioteca.prototype.adicionarLivros = function (vetor) {
        var _this = this;
        vetor.forEach(function (livro) {
            _this.livros.push(livro);
        });
        console.log("Livros adicionado.");
    };
    Biblioteca.prototype.listarLivros = function () {
        console.log("LISTAGEM DOS LIVROS:");
        this.livros.forEach(function (livro) {
            console.log("- " + livro.descricao());
        });
    };
    return Biblioteca;
}());
var livro1 = new Livro("1984", "George Orwell", 16.09);
var livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
var livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
var livro4 = new Livro("O Pequeno Príncipe", "Saint-Exupery", 30);
var vetor = [livro1, livro2, livro3, livro4];
var biblio = new Biblioteca(vetor);
biblio.listarLivros();
