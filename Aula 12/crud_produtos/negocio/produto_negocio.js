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

module.exports = {
    inserir
}