export class Conta {
    private _saldo: number;
  
    constructor(saldoInicial: number = 0) {
      this._saldo = saldoInicial;
    }
  
    get saldo(): number {
      return this._saldo;
    }
  
    set saldo(saldo: number) {
      this._saldo = saldo;
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