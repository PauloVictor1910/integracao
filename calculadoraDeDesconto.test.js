// calculadoraDeDesconto.test.js
const calcularDesconto = require('./calculadoraDeDesconto');

test('calcular desconto de 10% em um produto de $100', () => {
  const resultado = calcularDesconto(100, 10);
  expect(resultado).toBe('90.00');
});

test('calcular desconto de 20% em um produto de $50', () => {
  const resultado = calcularDesconto(50, 20);
  expect(resultado).toBe('40.00');
});
