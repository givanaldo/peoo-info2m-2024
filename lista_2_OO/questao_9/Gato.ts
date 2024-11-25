import { Animal } from './Animal';

export class Gato extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): void {
    console.log('Miau');
  }
}
