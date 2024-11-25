export class Produto {
    private _nome : string;
    private _preco : number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    get nome() : string { return this._nome; }
    set nome(novo_nome : string) { this._nome = novo_nome; }
    get preco() : number { return this._preco; }
    set preco(novo_preco : number) { this._preco = novo_preco; }

    descricao() : string { return `${this.nome} (R$ ${this.preco.toFixed(2)})`; }
  }