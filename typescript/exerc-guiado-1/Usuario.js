"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, idUsuario) {
        this._nome = nome;
        this._idUsuario = idUsuario;
    }
    Object.defineProperty(Usuario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Usuario.prototype.emprestarItem = function (item) {
        console.log("".concat(this._nome, " emprestou => ").concat(item.exibirInformacoes()));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
