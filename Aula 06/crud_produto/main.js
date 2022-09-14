// Main
let cadastroProdutos = require('./cadastro_produtos')

let produtos1 = {
    nome: 'Produto 1',
    preco: 10
}

cadastroProdutos.inserir(produtos1)

let produtos2 = {
    nome: 'Produto 2',
    preco: 20
}

cadastroProdutos.inserir(produtos2)

console.log("Listar: ", cadastroProdutos.listar())

try {
    console.log("Buscar por ID: ", cadastroProdutos.buscarPorId(2))
}
catch (erro) {
    console.log("Erro", erro)
}

const produtoAlterado = {
    nome: 'Produto 1',
    preco: 30
}

cadastroProdutos.atualizar(1, produtoAlterado)

cadastroProdutos.deletar(2)
console.log("Listar: ", cadastroProdutos.listar())