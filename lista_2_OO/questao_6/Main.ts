import { ContaBancaria } from "./ContaBancaria";

const minhaConta = new ContaBancaria('João Silva', 500);

console.log(`Saldo atual: R$ ${minhaConta.mostrarSaldo().toFixed(2)}`);

minhaConta.depositar(200);
minhaConta.sacar(100);

console.log(`Saldo atual: R$ ${minhaConta.mostrarSaldo().toFixed(2)}`);