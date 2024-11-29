import { ItemBiblioteca } from './ItemBiblioteca';

export class Usuario {
  private _nome: string;
  private _idUsuario: number;

  constructor(nome: string, idUsuario: number) {
    this._nome = nome;
    this._idUsuario = idUsuario;
  }

  get nome(): string {
    return this._nome;
  }

  emprestarItem(item: ItemBiblioteca): void {
    console.log(`${this._nome} emprestou => ${item.exibirInformacoes()}`);
  }
}