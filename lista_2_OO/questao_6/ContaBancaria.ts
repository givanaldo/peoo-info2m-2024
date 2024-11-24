export class ContaBancaria {
  private saldo: number;
  private titular: string;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('Valor de depósito inválido.');
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log('Saldo insuficiente ou valor de saque inválido.');
    }
  }

  mostrarSaldo(): number {
    return this.saldo;
  }
}