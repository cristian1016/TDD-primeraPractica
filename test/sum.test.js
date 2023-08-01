const sum = require('../src/libs/sum.js');

test('suma de 1 + 2 es igual 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('la suma de  -1 + 1 es igual 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('la suma de 0 + 0 es igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});