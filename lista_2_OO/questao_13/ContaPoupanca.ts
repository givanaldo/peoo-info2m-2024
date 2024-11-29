import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
  private _taxaRendimento: number;

  constructor(saldoInicial: number = 0, taxaRendimento: number = 0.01) {
    super(saldoInicial);
    this._taxaRendimento = taxaRendimento;
  }

  get taxaRendimento(): number {
    return this._taxaRendimento;
  }

  set taxaRendimento(taxaRendimento: number) {
    this._taxaRendimento = taxaRendimento;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      const valorComRendimento = valor + (valor * this._taxaRendimento);
      this._saldo += valorComRendimento;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso com rendimento aplicado. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
    } else {
      console.log('Valor de depósito deve ser maior que zero.');
    }
  }
}
