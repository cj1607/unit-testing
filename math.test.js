const add = require('./addition');

test('adds positive numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
});

test('adds mixed numbers', () => {
    expect(add(-2, 3)).toBe(1);
});
