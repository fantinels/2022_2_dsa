// Produto -> id, nome, preço

// json -> {id:"Produto1", preco: 10}

/*
let produto = {
    //id: 1,
    nome: 'Produto1',
    preco = 10
}
*/

let listaProdutos = []
let idGerado = 0

function geradorId() {
    return ++idGerado
}


function inserir(produto) {
    produto.id = geradorId()
    listaProdutos.push(produto)
    
}

function listar() {
    return listaProdutos
}

function buscarPorId(id) {
    for(let produto of listaProdutos) {
        if(produto.id == id) {
            return produto
        }
    }

    //console.log("Erro", "Id não encontrado")

    throw ("Id não encontrado")
}

function atualizar(id, produtoAlterado) {
    for(let produto of listaProdutos) {
        if(produto.id == id) {
            if (produtoAlterado.nome) {
                produto.nome = produtoAlterado.nome
            }
            if (produtoAlterado.preco) {
                produto.preco = produtoAlterado.preco
            }
        }
    }
}

function deletar(id) {
    let indice = 0 
    for (indice in listaProdutos) {
        if (listaProdutos[indice].id == id) {
            listaProdutos.splice(indice, 1)
        }
    }
}

// Main
let produtos1 = {
    nome: 'Produto 1',
    preco: 10
}

inserir(produtos1)

let produtos2 = {
    nome: 'Produto 2',
    preco: 20
}

inserir(produtos2)

console.log("Listar: ", listar())

try {
    console.log("Buscar por ID: ", buscarPorId(2))
}
catch (erro) {
    console.log("Erro", erro)
}

const produtoAlterado = {
    nome: 'Produto 1',
    preco: 30
}

atualizar(1, produtoAlterado)

deletar(2)
console.log("Listar: ", listar())