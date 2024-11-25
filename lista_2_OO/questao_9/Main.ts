import { Animal } from './Animal';
import { Cachorro } from './Cachorro';
import { Gato } from './Gato';

const animalGenerico = new Animal('Animal Genérico');
animalGenerico.emitirSom();

const cachorro = new Cachorro('Rex');
cachorro.emitirSom();

const gato = new Gato('Felix');
gato.emitirSom();
