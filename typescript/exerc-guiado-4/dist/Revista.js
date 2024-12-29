import { ItemBiblioteca } from './ItemBiblioteca.js';

export class Revista extends ItemBiblioteca {
    constructor(titulo, anoPublicacao, editora, numeroEdicao) {
        super(titulo, anoPublicacao);
        this.editora = editora;
        this.numeroEdicao = numeroEdicao;
    }
    
    exibirInformacoes() {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}, Edição: ${this.numeroEdicao}`;
    }
}
