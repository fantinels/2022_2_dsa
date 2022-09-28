const cadastroProd = require('./cadastro_produtos')

let listaInicialEsperada = [
    {id: 1, nome: 'Produto 1', preco: 10},
    {id: 2, nome: 'Produto 2', preco: 20},  
    {id: 3, nome: 'Produto 3', preco: 30}
]

let listaInserirEsperada = [
    {id: 1, nome: 'Produto 1', preco: 10},
    {id: 2, nome: 'Produto 2', preco: 20},  
    {id: 3, nome: 'Produto 3', preco: 30},
    {id: 4, nome: 'Produto 4', preco: 40}
]

let listaAlterarEsperada = [
    {id: 1, nome: 'Produto x', preco: 100},
    {id: 2, nome: 'Produto 2', preco: 20},  
    {id: 3, nome: 'Produto 3', preco: 30}
]

let listaDeletarEsperada = [
    {id: 2, nome: 'Produto 2', preco: 20},  
    {id: 3, nome: 'Produto 3', preco: 30}
]

beforeEach (() => {
    cadastroProd.init();
})

// Cenário de Sucesso - Listar
test("Listar retorna lista inicial esperada", function() {
    expect(cadastroProd.listar()).toEqual(listaInicialEsperada)
})

// Cenário de Sucesso - Buscar por ID
test("Buscar por ID 2 deve retornar Produto 2", function() {
    let produto2 = {
        id: 2, 
        nome: 'Produto 2', 
        preco: 20
    };
    expect(cadastroProd.buscarPorId(2)).toEqual(produto2)
})

// Cenário de Exceção | Insucesso - Buscar por ID
test("Buscar por ID 6 deve gerar exceção", function() {
    const erroIdNaoEncontrado = "Id não encontrado"
    // () - Função de callback
    expect(() => cadastroProd.buscarPorId(6)).toThrow(erroIdNaoEncontrado)
})

// Cenário de Sucesso - Inserir
test('Inserir Produto 4 deve ser inserido na lista com ID 4 gerado', function() {
    const produtoInserir = {nome: 'Produto 4', preco: 40};
    cadastroProd.inserir(produtoInserir);
    expect(cadastroProd.listar()).toEqual(listaInserirEsperada);
})

// Cenário de Sucesso - Atualizar
test('Alterar produto com ID 2 para nome "Produto x" e preço 100 deve atualizar na lista', function() {
    /*
    const produtoAlteradoEsperado = {
        id: 1, 
        nome: 'Produto x', 
        preco: 100
    };
    */

    const produtoAlterar = { nome: 'Produto x', preco: 100};

    const idAlterar = 1;

    cadastroProd.atualizar(idAlterar, produtoAlterar);

    //expect(cadastroProd.buscarPorId(1)).toEqual(produtoAlteradoEsperado);

    expect(cadastroProd.listar()).toEqual(listaAlterarEsperada)
})


// Cenário de Insucesso - Atualizar
test('Alterar o produto com ID 6 deve gerar exceção id não encontrado', function() {
    const produtoAlterar = { 
        nome: 'Produto 6', 
        preco: 600
    };

    const erroIdNaoEncontrado = "Id não encontrado"
    expect(() => cadastroProd.atualizar(6, produtoAlterar)).toThrow(erroIdNaoEncontrado)
})

// Cenário de Sucesso - Deletar
test('Apagar produto com ID 1 deve deletar produto da lista', function() {
    cadastroProd.deletar(1)

    expect(cadastroProd.listar()).toEqual(listaDeletarEsperada)

})

// Cenário de Insucesso - Deletar
test('Apagar produto com ID 6 deve gerar exceção id não encontrado', function() {
    const erroIdNaoEncontrado = "Id não encontrado"
    expect(() => cadastroProd.deletar(6)).toThrow(erroIdNaoEncontrado)
})
