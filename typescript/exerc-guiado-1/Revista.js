"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
var ItemBiblioteca_1 = require("./ItemBiblioteca");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(titulo, anoPublicacao, editora, numeroEdicao) {
        var _this = _super.call(this, titulo, anoPublicacao) || this;
        _this.editora = editora;
        _this.numeroEdicao = numeroEdicao;
        return _this;
    }
    Revista.prototype.exibirInformacoes = function () {
        return "Revista: ".concat(this.titulo, ", Editora: ").concat(this.editora, ", Ano: ").concat(this.anoPublicacao, ", Edi\u00E7\u00E3o: ").concat(this.numeroEdicao);
    };
    return Revista;
}(ItemBiblioteca_1.ItemBiblioteca));
exports.Revista = Revista;
