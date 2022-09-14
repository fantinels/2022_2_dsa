const sum = require('./sum');

// sum(5 ,5) = 10

test('Soma de dois valores inteiros deve ser outro inteiro', function() {
    expect(sum(5, 5)).toBe(10);
});

test('Soma (-5, -5) = 10', function() {
    expect(sum(-5, -5)).toBe(10);
});