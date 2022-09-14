const cadastroProd = require('./cadastro_produtos')

// Testes de Inserção
test('Inserção de Produtos | Nome e Preço', function() {
    expect(cadastroProd.inserir({nome: 'Coxinha', preco: 6})).toBe()
});

test('Inserção de Produtos sem Nome | Obrigatório ter nome', function() {
    expect(cadastroProd.inserir({preco: 6})).toBe(100)
});

test('Inserção de Produtos sem Preço | Obrigatório ter preço', function() {
    expect(cadastroProd.inserir({nome: 'Pão'})).toBe("")
});

test('Inserção com Preço Inválido', function() {
    expect(cadastroProd.inserir({nome: 'Pizza', preco: 'Calabresa'})).toBe(100)
});

// Testes de Listagem
test('Listar Produtos', function() {
    expect(cadastroProd.listar()).toBe(1)
});

// Testes de Atualização
test('Atualizar dados', function() {
    expect(cadastroProd.atualizar(1, {nome: "Coxinha de Frango", preco: 7})).toBe()
});

test('Atualizando dados com ID inexistente', function() {
    expect(cadastroProd.atualizar(15, {nome: "Leite", preco: 7})).toBe(100)
});

// Teste com Deletar
test('Deletar Produtos por ID', function() {
    expect(cadastroProd.deletar(1)).toBe()
});

test('Deletar Produtos com ID inexistente', function() {
    expect(cadastroProd.deletar(15)).toBe(100)
});

// Teste para Buscar por ID
test('Buscar por ID', function() {
    expect(cadastroProd.buscarPorId(2)).toBe({id: 2, nome: 'Produto 2', preco: 20})
});

test('Buscar por ID inexistente', function() {
    expect(cadastroProd.buscarPorId(15)).toBe(100)
});
