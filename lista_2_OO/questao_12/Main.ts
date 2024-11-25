import { Endereco } from './Endereco';
import { Pessoa } from './Pessoa'; 

const endereco = new Endereco('Rua das Flores', 'São Paulo', '01234-567');
const pessoa = new Pessoa('João Silva', endereco);

pessoa.mostrarEndereco();
