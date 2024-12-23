import { ItemBiblioteca } from './ItemBiblioteca.js';
export class Livro extends ItemBiblioteca {
    constructor(titulo, anoPublicacao, autor, numeroPaginas) {
        super(titulo, anoPublicacao);
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    exibirInformacoes() {
        return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Páginas: ${this.numeroPaginas}`;
    }
}
