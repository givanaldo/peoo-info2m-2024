import { ItemBiblioteca } from './ItemBiblioteca';

export class Revista extends ItemBiblioteca {
  constructor(
    titulo: string,
    anoPublicacao: number,
    private editora: string,
    private numeroEdicao: number
  ) {
    super(titulo, anoPublicacao);
  }

  exibirInformacoes(): string {
    return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}, Edição: ${this.numeroEdicao}`;
  }
}