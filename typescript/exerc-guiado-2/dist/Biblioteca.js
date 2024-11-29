"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.itensDisponiveis = [];
        this.usuarios = [];
    }
    adicionarItem(item) {
        this.itensDisponiveis.push(item);
        console.log(`Item adicionado => ${item.exibirInformacoes()}`);
    }
    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(`Usuário registrado => ${usuario.nome}`);
    }
    emprestarItem(usuario, item) {
        console.log(`Item ${item.exibirInformacoes()} emprestado para ${usuario.nome}`);
    }
}
exports.Biblioteca = Biblioteca;
