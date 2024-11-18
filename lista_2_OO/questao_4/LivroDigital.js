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
exports.LivroDigital = void 0;
var Livro_1 = require("./Livro");
var LivroDigital = /** @class */ (function (_super) {
    __extends(LivroDigital, _super);
    function LivroDigital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo, autor, preco) || this;
        _this.formato = formato;
        return _this;
    }
    LivroDigital.prototype.descricao = function () {
        return "".concat(_super.prototype.descricao.call(this), " # Formato: ").concat(this.formato);
    };
    return LivroDigital;
}(Livro_1.Livro));
exports.LivroDigital = LivroDigital;
