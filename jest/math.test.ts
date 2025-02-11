import { soma } from './math';

test('Soma 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('Soma 2 + 6 deve ser 8', () => {
  expect(soma(2, 6)).toBe(8);
});

test('Soma 12 + 6 deve ser 18', () => {
  expect(soma(12, 6)).toBe(18);
});
