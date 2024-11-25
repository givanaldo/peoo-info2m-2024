import { InstrumentoMusical } from './InstrumentoMusical';
import { Violao } from './Violao';
import { Piano } from './Piano';

function tocarInstrumentos(instrumentos: InstrumentoMusical[]): void {
  instrumentos.forEach((instrumento) => {
    instrumento.tocar();
  });
}

const violao = new Violao();
const piano = new Piano();

const instrumentos: InstrumentoMusical[] = [violao, piano];

tocarInstrumentos(instrumentos);
