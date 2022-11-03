const produtosPersistence = require('../persistencia/produto_persistencia')

async function inserir(produto) {
    if(produto && produto.nome && produto.preco) {
        const produtoInserido = await produtosPersistence.inserir(produto)
        return produtoInserido;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
}

async function buscarPorId(id) {
    
    if (id) {
        const buscarId = await produtosPersistence.buscarPorId(id)
        return buscarId;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
    
}

async function atualizar(id, produto) {
    
    if (id, produto && produto.nome && produto.preco) {
        const produtoAtualizado = await produtosPersistence.atualizar(id, produto)
        return produtoAtualizado;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
    
}

async function deletar(id) {
    
    if (id) {
        const produtoDeletado = await produtosPersistence.deletar(id)
        return produtoDeletado;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
    
}

module.exports = {
    inserir,
    buscarPorId,
    atualizar,
    deletar
}