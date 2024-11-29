export class Funcionario {
    private _nome: string;
    private _salario: number;
  
    constructor(nome: string, salario: number) {
      this._nome = nome;
      this._salario = salario;
    }
  
    get nome(): string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }
  
    get salario(): number { return this._salario; }  
    set salario(salario: number) {
      if (salario >= 0)
        this._salario = salario;
      else
        console.log('Salário não pode ser negativo');
    }

    descricao() : string {
        return `Funcionário: ${this.nome}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
  }