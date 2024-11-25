export class Conta {
    protected _saldo: number;
  
    constructor(saldoInicial: number = 0) {
      this._saldo = saldoInicial;
    }  
  
    depositar(valor: number): void {
      if (valor > 0) {
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
      } else {
        console.log('Valor de depósito deve ser maior que zero.');
      }
    }
  
    consultarSaldo(): void {
      console.log(`Saldo atual: R$ ${this._saldo.toFixed(2)}`);
    }
  }