"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () { return this._nome; },
        set: function (nome) { this._nome = nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () { return this._salario; },
        set: function (salario) {
            if (salario >= 0)
                this._salario = salario;
            else
                console.log('Salário não pode ser negativo');
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.descricao = function () {
        return "Funcion\u00E1rio: ".concat(this.nome, ", Sal\u00E1rio: R$ ").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
