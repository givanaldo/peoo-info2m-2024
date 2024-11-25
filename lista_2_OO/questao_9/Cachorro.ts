import { Animal } from './Animal';

export class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): void {
    console.log('Latido');
  }
}
