/* Adicione métodos getters e setters para as propriedades, de modo que 
o usuário possa ler e modificar os valores (altere os atributos para privados).
Crie uma instância da classe e teste os métodos, verificando se os valores 
podem ser acessados e atualizados corretamente.
*/
class Livro {
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
        return `Livro: ${this.titulo}\nAutor: ${this.autor}\nPreço: R$ ${this.preco.toFixed(2)}`;    }
}

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);

let livros : Livro[] = [livro1, livro2, livro3];
livros.forEach(livro => {
    console.log(livro.descricao());
    console.log("------------");
});

livro2.alterarPreco(-1.99);
console.log(livro2.descricao());