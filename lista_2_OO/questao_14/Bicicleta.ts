import { Veiculo } from './Veiculo';

export class Bicicleta extends Veiculo {
  constructor(nome: string = 'Bicicleta') {
    super(nome);
  }

  mover(): void {
    console.log('A bicicleta está em movimento');
  }
}
