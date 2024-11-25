import { Veiculo } from './Veiculo';

export class Carro extends Veiculo {
  constructor(nome: string = 'Carro') {
    super(nome);
  }

  mover(): void {
    console.log('O carro está em movimento');
  }
}
