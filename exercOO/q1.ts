/* Crie uma classe Livro com os atributos titulo, 
autor e preco. Crie um método descricao que retorne 
uma string com o título, autor e preço do livro.
*/
class Livro {
    titulo : string;
    autor : string;
    preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    descricao() : string {
        return `Livro: ${this.titulo} \n
                Autor: ${this.autor} \n
                Preço: R$ ${this.preco.toFixed(2)}`;
    }
}

