"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.itensDisponiveis = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.adicionarItem = function (item) {
        this.itensDisponiveis.push(item);
        console.log("Item adicionado => ".concat(item.exibirInformacoes()));
    };
    Biblioteca.prototype.registrarUsuario = function (usuario) {
        this.usuarios.push(usuario);
        console.log("Usu\u00E1rio registrado => ".concat(usuario.nome));
    };
    Biblioteca.prototype.emprestarItem = function (usuario, item) {
        console.log("Item ".concat(item.exibirInformacoes(), " emprestado para ").concat(usuario.nome));
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
