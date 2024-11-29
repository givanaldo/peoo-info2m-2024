import { ItemBiblioteca } from './ItemBiblioteca';

export class Livro extends ItemBiblioteca {

  private autor: string;
  private numeroPaginas: number;

  constructor(titulo: string, anoPublicacao: number, autor: string, numeroPaginas: number) {
    super(titulo, anoPublicacao);
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  exibirInformacoes(): string {
    return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Páginas: ${this.numeroPaginas}`;
  }
}