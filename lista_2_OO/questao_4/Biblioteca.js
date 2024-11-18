"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        var _this = this;
        this.livros = [];
        if (livros) {
            livros.forEach(function (livro) {
                _this.livros.push(livro);
            });
        }
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
exports.Biblioteca = Biblioteca;
