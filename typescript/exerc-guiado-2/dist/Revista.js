"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const ItemBiblioteca_1 = require("./ItemBiblioteca");
class Revista extends ItemBiblioteca_1.ItemBiblioteca {
    constructor(titulo, anoPublicacao, editora, numeroEdicao) {
        super(titulo, anoPublicacao);
        this.editora = editora;
        this.numeroEdicao = numeroEdicao;
    }
    exibirInformacoes() {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}, Edição: ${this.numeroEdicao}`;
    }
}
exports.Revista = Revista;
