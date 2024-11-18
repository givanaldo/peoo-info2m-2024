export class Livro {
    private titulo : string;
    private autor : string;
    private preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    alterarPreco(novo_preco : number) : void {
        if (novo_preco >= 0)
            this.preco = novo_preco;
        else 
            console.log("Não permitido valor negativo!");
    }

    descricao() : string {
        return `Livro: ${this.titulo} # Autor: ${this.autor} # Preço: R$ ${this.preco.toFixed(2)}`;
    }
}
