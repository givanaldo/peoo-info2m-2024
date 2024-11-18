import { Livro } from './Livro';

export class LivroDigital extends Livro {
    formato: string; // EX: PDF, EPUB, MOBI, KPF etc.

    constructor(titulo: string, autor: string, preco: number, formato: string) {
        super(titulo, autor, preco);
        this.formato = formato;
    }

    descricao() : string {
        return `${super.descricao()} # Formato: ${this.formato}`;
    }
}