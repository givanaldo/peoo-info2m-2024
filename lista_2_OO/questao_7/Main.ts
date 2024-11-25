import { Funcionario } from './Funcionario';
import { Gerente } from './Gerente';

const funcionario = new Funcionario('Ana Rosa', 3000);
console.log(funcionario.descricao());

const gerente = new Gerente('Julia Santana', 5000, 2000);
console.log(gerente.descricao());
