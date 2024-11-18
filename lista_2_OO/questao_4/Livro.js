"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
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
        return "Livro: ".concat(this.titulo, " # Autor: ").concat(this.autor, " # Pre\u00E7o: R$ ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
exports.Livro = Livro;
