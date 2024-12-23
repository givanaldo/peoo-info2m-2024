export class Usuario {
    constructor(nome, idUsuario) {
        this._nome = nome;
        this._idUsuario = idUsuario;
    }
    get nome() {
        return this._nome;
    }
    emprestarItem(item) {
        console.log(`${this._nome} emprestou => ${item.exibirInformacoes()}`);
    }
}
