import { Funcionario } from './Funcionario';

export class Gerente extends Funcionario {
  private _bonus: number;

  constructor(nome: string, salario: number, bonus: number) {
    super(nome, salario);
    this._bonus = bonus;
  }

  get bonus(): number { return this._bonus; }

  set bonus(bonus: number) {
    if (bonus >= 0)
      this._bonus = bonus;
    else
      console.log('Bônus não pode ser negativo');
  }

  calcularSalarioTotal(): number {
    return this.salario + this._bonus;
  }

  descricao(): string {
      return `Gerente: ${this.nome}, Salário base: R$ ${this.salario.toFixed(2)}, Bônus: R$ ${this.bonus.toFixed(2)}, Salário Total: R$${this.calcularSalarioTotal().toFixed(2)}`;
  }
}
