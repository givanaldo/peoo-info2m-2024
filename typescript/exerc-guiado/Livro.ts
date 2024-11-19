import { ItemBiblioteca } from './ItemBiblioteca';

export class Livro extends ItemBiblioteca {
  constructor(
    titulo: string,
    anoPublicacao: number,
    private autor: string,
    private numeroPaginas: number
  ) {
    super(titulo, anoPublicacao);
  }

  exibirInformacoes(): string {
    return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Páginas: ${this.numeroPaginas}`;
  }
}