"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this._saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Dep\u00F3sito de R$ ".concat(valor.toFixed(2), " realizado com sucesso. Saldo atual: R$ ").concat(this._saldo.toFixed(2)));
        }
        else {
            console.log('Valor de depósito deve ser maior que zero.');
        }
    };
    Conta.prototype.consultarSaldo = function () {
        console.log("Saldo atual: R$ ".concat(this._saldo.toFixed(2)));
    };
    return Conta;
}());
exports.Conta = Conta;
