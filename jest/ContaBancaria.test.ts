import { ContaBancaria } from './ContaBancaria';

describe('Conta Bancária', () => {
  test('Deve iniciar com saldo correto', () => {
    const conta = new ContaBancaria(100);
    expect(conta.getSaldo()).toBe(100);
  });

  test('Deve permitir depósito', () => {
    const conta = new ContaBancaria(100);
    conta.depositar(50);
    expect(conta.getSaldo()).toBe(150);
  });

  test('Deve permitir saque dentro do saldo disponível', () => {
    const conta = new ContaBancaria(100);
    conta.sacar(30);
    expect(conta.getSaldo()).toBe(70);
  });

  test('Deve impedir saque maior que o saldo', () => {
    const conta = new ContaBancaria(100);
    expect(() => conta.sacar(200)).toThrow('Saldo insuficiente');
  });

  test('Deve impedir depósito negativo ou zero', () => {
    const conta = new ContaBancaria(100);
    expect(() => conta.depositar(0)).toThrow('Depósito deve ser positivo');
    expect(() => conta.depositar(-10)).toThrow('Depósito deve ser positivo');
  });

  test('Deve impedir criação de conta com saldo negativo', () => {
    expect(() => new ContaBancaria(-50)).toThrow('Saldo inicial não pode ser negativo');
  });
});
