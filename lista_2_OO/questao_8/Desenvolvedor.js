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
exports.Desenvolvedor = void 0;
var Funcionario_1 = require("./Funcionario");
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor(nome, salario, nivel) {
        var _this = _super.call(this, nome, salario) || this;
        _this._nivel = nivel;
        return _this;
    }
    Object.defineProperty(Desenvolvedor.prototype, "nivel", {
        get: function () {
            return this._nivel;
        },
        set: function (nivel) {
            if (nivel === 'Junior' || nivel === 'Pleno' || nivel === 'Senior')
                this._nivel = nivel;
            else
                console.log('Nível inválido. Deve ser Junior, Pleno ou Senior');
        },
        enumerable: false,
        configurable: true
    });
    Desenvolvedor.prototype.promover = function () {
        var aumento;
        switch (this._nivel) {
            case 'Junior':
                aumento = 0.1; // 10% de aumento
                break;
            case 'Pleno':
                aumento = 0.2; // 20% de aumento
                break;
            case 'Senior':
                aumento = 0.3; // 30% de aumento
                break;
            default:
                throw new Error('Nível inválido para promoção');
        }
        this._salario += this._salario * aumento;
        console.log("Desenvolvedor ".concat(this.nome, " promovido. Novo sal\u00E1rio: R$ ").concat(this._salario.toFixed(2)));
    };
    return Desenvolvedor;
}(Funcionario_1.Funcionario));
exports.Desenvolvedor = Desenvolvedor;
