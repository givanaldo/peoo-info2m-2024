import { ItemBiblioteca } from './ItemBiblioteca';

export class Usuario {
  constructor(private _nome: string, private _idUsuario: number) {}

  get nome(): string {
    return this._nome;
  }

  emprestarItem(item: ItemBiblioteca): void {
    console.log(`${this._nome} emprestou => ${item.exibirInformacoes()}`);
  }
}