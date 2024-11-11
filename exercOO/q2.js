/* Adicione métodos getters e setters para as propriedades, de modo que
o usuário possa ler e modificar os valores (altere os atributos para privados).
Crie uma instância da classe e teste os métodos, verificando se os valores
podem ser acessados e atualizados corretamente.
*/
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
var livro1 = new Livro("1984", "George Orwell", 16.09);
var livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
var livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
var livros = [livro1, livro2, livro3];
livros.forEach(function (livro) {
    console.log(livro.descricao());
    console.log("------------");
});
livro2.alterarPreco(-1.99);
console.log(livro2.descricao());
