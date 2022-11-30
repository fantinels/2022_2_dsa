const {validarProduto} = require('./produto_validacao')
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

async function listar() {
    return await produtosPersistence.listar()
}

async function buscarPorId(id) {
    const produto = await produtosPersistence.buscarPorId(id);
    if (!produto) {
        throw {id: 404, msg: "Produto não encontrado"};
    }

    return produto;
}

async function buscarPorNome(nome) {
    if (!nome) {
        throw {id: 400, msg: "Falta parâmetro nome"};
    }

    return await produtosPersistence.buscarPorNome(nome);
}

async function atualizar(id, produto) {
    if(validarProduto(produto)) {
        const produtoAtualizar = await buscarPorId(id);

        if(produtoAtualizar) {
            return await produtosPersistence.atualizar(id, produto);
        }
        
    }
    else {
        throw {id: 400, msg: "Parâmetros inválidos ou incompletos"};
    }
    
}

async function deletar(id) {
    const produto = await produtosPersistence.deletar(id);
    if (!produto) {
        throw {id: 404, msg: "Produto não encontrado"};
    }

    return produto;
}

module.exports = {
    inserir,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    deletar
}

