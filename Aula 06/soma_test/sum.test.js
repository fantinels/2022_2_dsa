const sum = require('./sum');

// sum(5 ,5) = 10

test('Soma(5, 5) = 10', function() {
    expect(sum(5, 5)).toBe(10);
});

test('5 é maior que 4 é verdadeiro', function() {
    expect((5 > 4)).toBeTruthy()
});

test('Soma (-5, -5) = 10', function() {
    expect(sum(-5, -5)).toBe(-1);
});

