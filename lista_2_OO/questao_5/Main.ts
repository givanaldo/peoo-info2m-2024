import { Produto } from './Produto';
import { CarrinhoDeCompras } from './CarrinhoDeCompras';

const produto1 = new Produto('Camisa', 50);
const produto2 = new Produto('Calça', 100);
const produto3 = new Produto('Sapato', 150);

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);

const total = carrinho.calcularTotal();
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
