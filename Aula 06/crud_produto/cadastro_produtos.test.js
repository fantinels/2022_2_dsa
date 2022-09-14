const cadastroProd = require('./cadastro_produtos')

let listaInicialEsperada = [
    {id: 1, nome: 'Produto 1', preco: 10},
    {id: 2, nome: 'Produto 2', preco: 20},  
    {id: 3, nome: 'Produto 3', preco: 30}   
]

// Cenário de Sucesso
test("Listar retorna lista inicial esperada", function() {
    expect(cadastroProd.listar()).toEqual(listaInicialEsperada)
})

// Cenário de Sucesso
test("Buscar por ID 2 deve retornar Produto 2", function() {
    let produto2 = {
        id: 2, 
        nome: 'Produto 2', 
        preco: 20
    }
    expect(cadastroProd.buscarPorId(2)).toEqual(produto2)
})

// Cenário de Exceção | Insucesso
test("Buscar por ID 6 deve gerar exceção", function() {
    const erroIdNaoEncontrado = "Id não encontrado"
    // () - Função de callback
    expect(() => cadastroProd.buscarPorId(6)).toThrow(erroIdNaoEncontrado)
})