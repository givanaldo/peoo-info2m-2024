import { InstrumentoMusical } from './InstrumentoMusical';

export class Violao extends InstrumentoMusical {
  constructor(nome: string = 'Violão') {
    super(nome);
  }

  tocar(): void {
    console.log('Tocando violão');
  }
}
