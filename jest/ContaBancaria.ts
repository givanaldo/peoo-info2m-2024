export class ContaBancaria {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      if (saldoInicial < 0) throw new Error('Saldo inicial não pode ser negativo');
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      if (valor <= 0) throw new Error('Depósito deve ser positivo');
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) throw new Error('Saldo insuficiente');
      this.saldo -= valor;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  }
  