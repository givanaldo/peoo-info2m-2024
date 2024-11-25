import { Funcionario } from './Funcionario';
import { Gerente } from './Gerente';

const funcionario = new Funcionario('Ana Rosa', 3000);
console.log(funcionario.descricao());
funcionario.salario = 5000;
console.log(funcionario.descricao());
funcionario.salario = -50; // não aceita a mudança de salário
console.log(funcionario.descricao());


const gerente = new Gerente('Julia Santana', 5000, 2000);
console.log(gerente.descricao());
