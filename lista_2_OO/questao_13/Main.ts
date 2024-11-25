import { Conta } from './Conta';
import { ContaPoupanca } from './ContaPoupanca';

const contaCorrente = new Conta(1000);
console.log("== CONTA CORRENTE ==");
contaCorrente.consultarSaldo();
contaCorrente.depositar(500);
contaCorrente.consultarSaldo();

const contaPoupanca = new ContaPoupanca(1000, 0.05);
console.log("== CONTA POUPANÇA ==");
contaPoupanca.consultarSaldo();
contaPoupanca.depositar(500);
contaPoupanca.consultarSaldo();
