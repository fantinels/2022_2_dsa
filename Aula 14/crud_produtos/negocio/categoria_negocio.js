const categoriaPersistence = require('../persistencia/categoria_persistencia')

async function inserir(categoria) {
    if(categoria && categoria.nome) {
        const categoriaInserido = await categoriaPersistence.inserir(categoria)
        return categoriaInserido;
    }
    else {
        throw {id: 400, msg: "Falta parâmetros"};
    }
}

async function listar() {
    return await categoriaPersistence.listar()
}

async function buscarPorId(id) {
    const categoria = await categoriaPersistence.buscarPorId(id);
    if (!categoria) {
        throw {id: 404, msg: "Produto não encontrado"};
    }

    return categoria;
}

async function atualizar(id, categoria) {
    if(categoria && categoria.nome) {
        const categoriaAtualizar = await buscarPorId(id);

        if(categoriaAtualizar) {
            return await categoriaPersistence.atualizar(id, categoria);
        }
        
    }
    else {
        throw {id: 400, msg: "Parâmetros inválidos ou incompletos"};
    }
    
}

async function deletar(id) {
    const categoria = await categoriaPersistence.deletar(id);
    if (!categoria) {
        throw {id: 404, msg: "Produto não encontrado"};
    }

    return categoria;
}

module.exports = {
    inserir,
    listar,
    buscarPorId,
    atualizar,
    deletar
}

