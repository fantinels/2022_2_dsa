// Main
let cadastroProdutos = require('./cadastro_produtos')

////////////////////////////////////////////////////////////
let produtos4 = {
    nome: 'Produto 4',
    preco: 40
}

////////////////////////////////////////////////////////////
cadastroProdutos.inserir(produtos4)

let produtos5 = {
    nome: 'Produto 5',
    preco: 50
}

cadastroProdutos.inserir(produtos5)

////////////////////////////////////////////////////////////
console.log("Listar: ", cadastroProdutos.listar())

////////////////////////////////////////////////////////////
try {
    console.log("Buscar por ID 2: ", cadastroProdutos.buscarPorId(2))
}
catch (erro) {
    console.log("Erro", erro)
}

try {
    console.log("Buscar por ID 4: ", cadastroProdutos.buscarPorId(4))
}
catch (erro) {
    console.log("Erro", erro)
}

try {
    console.log("Buscar por ID 6: ", cadastroProdutos.buscarPorId(6))
}
catch (erro) {
    console.log("Erro", erro)
}

////////////////////////////////////////////////////////////
cadastroProdutos.atualizar(1, { preco: 11 })
console.log("Listar: ", cadastroProdutos.listar())


////////////////////////////////////////////////////////////
//cadastroProdutos.deletar(2)
//console.log("Listar: ", cadastroProdutos.listar())