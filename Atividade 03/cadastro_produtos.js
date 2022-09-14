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

module.exports = {
    inserir,
    listar,
    buscarPorId,
    atualizar,
    deletar
}