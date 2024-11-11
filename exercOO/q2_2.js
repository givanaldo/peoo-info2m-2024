var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }
    Object.defineProperty(Livro.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (novo_preco) {
            if (novo_preco >= 0)
                this._preco = novo_preco;
            else
                console.log("Não permitido valor negativo!");
        },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.descricao = function () {
        return "Livro: ".concat(this._titulo, "\nAutor: ").concat(this._autor, "\nPre\u00E7o: R$ ").concat(this._preco.toFixed(2));
    };
    return Livro;
}());
var livro1 = new Livro("1984", "George Orwell", 16.09);
var livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
var livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
var livros = [livro1, livro2, livro3];
livros.forEach(function (livro) {
    console.log(livro.descricao());
    console.log("------------");
});
livro2.preco = -1.99;
console.log(livro2.descricao());
