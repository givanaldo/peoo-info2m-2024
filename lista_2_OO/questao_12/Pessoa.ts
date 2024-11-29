import { Endereco } from './Endereco';

export class Pessoa {
  private _nome: string;
  private _endereco: Endereco;

  constructor(nome: string, endereco: Endereco) {
    this._nome = nome;
    this._endereco = endereco;
  }

  get nome(): string { return this._nome; }
  set nome(nome: string) { this._nome = nome; }
  get endereco(): Endereco { return this._endereco; }
  set endereco(endereco: Endereco) { this._endereco = endereco; }

  mostrarEndereco(): void {
    console.log(`Endereço de ${this._nome}: ${this._endereco.rua}, ${this._endereco.cidade} - CEP: ${this._endereco.cep}`);
  }
}
