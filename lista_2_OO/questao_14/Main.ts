import { Veiculo } from './Veiculo';
import { Carro } from './Carro';
import { Bicicleta } from './Bicicleta';

function moverVeiculos(veiculos: Veiculo[]): void {
  veiculos.forEach((veiculo) => {
    veiculo.mover();
  });
}

const carro = new Carro();
const bicicleta = new Bicicleta();

const veiculos: Veiculo[] = [carro, bicicleta];

moverVeiculos(veiculos);
