import { Produto } from './Produto';

export class CarrinhoDeCompras {
  private produtos: Produto[] = [];

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto adicionado: ${produto.descricao()}`);
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}
