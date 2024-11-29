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
exports.ContaPoupanca = void 0;
var Conta_1 = require("./Conta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(saldoInicial, taxaRendimento) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        if (taxaRendimento === void 0) { taxaRendimento = 0.01; }
        var _this = _super.call(this, saldoInicial) || this;
        _this._taxaRendimento = taxaRendimento;
        return _this;
    }
    Object.defineProperty(ContaPoupanca.prototype, "taxaRendimento", {
        get: function () {
            return this._taxaRendimento;
        },
        set: function (taxaRendimento) {
            this._taxaRendimento = taxaRendimento;
        },
        enumerable: false,
        configurable: true
    });
    ContaPoupanca.prototype.depositar = function (valor) {
        if (valor > 0) {
            var valorComRendimento = valor + (valor * this._taxaRendimento);
            this._saldo += valorComRendimento;
            console.log("Dep\u00F3sito de R$ ".concat(valor.toFixed(2), " realizado com sucesso com rendimento aplicado. Saldo atual: R$ ").concat(this._saldo.toFixed(2)));
        }
        else {
            console.log('Valor de depósito deve ser maior que zero.');
        }
    };
    return ContaPoupanca;
}(Conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
