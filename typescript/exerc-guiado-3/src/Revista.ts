import { ItemBiblioteca } from './ItemBiblioteca.js';

export class Revista extends ItemBiblioteca {
  private editora: string;
  private numeroEdicao: number;

  constructor(titulo: string, anoPublicacao: number, editora: string, numeroEdicao: number) {
    super(titulo, anoPublicacao);
    this.editora = editora;
    this.numeroEdicao = numeroEdicao;
  }

  exibirInformacoes(): string {
    return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}, Edição: ${this.numeroEdicao}`;
  }
}