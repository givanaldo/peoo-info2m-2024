import { InstrumentoMusical } from './InstrumentoMusical';

export class Piano extends InstrumentoMusical {
  constructor(nome: string = 'Piano') {
    super(nome);
  }

  tocar(): void {
    console.log('Tocando piano');
  }
}
