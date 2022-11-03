const produtosPersistence = require('./persistencia/produto_persistencia')
const produtosNegocio = require('./negocio/produto_negocio')

async function main() {

    // INSERIR //
    try {
        const produtoInserido1 = await produtosNegocio.inserir({nome: "produtoZ", preco: 30})
        console.log("Produto inserido: ", produtoInserido1);
    } catch (error) {
        console.log(error);
    }

    try {
        const produtoInserido2 = await produtosNegocio.inserir({nome: "produtoY"})
        console.log("Produto inserido: ", produtoInserido2)
    } catch (error) {
        console.log(error)
    }

    // LISTAR //
    const listaProdutos = await produtosPersistence.listar()
    console.log("Lista produtos: ", listaProdutos)

    // BUSCAR POR ID //
    try {
        const buscarId1 = await produtosNegocio.buscarPorId(1)
        console.log("Buscando por ID: ", buscarId1);
    } catch (error) {
        console.log(error);
    }

    try {
        const buscarId2 = await produtosNegocio.buscarPorId()
        console.log("Buscando por ID: ", buscarId2);
    } catch (error) {
        console.log(error);
    }

    // ATUALIZAR //
    try {
        const atualizarProduto1 = await produtosNegocio.atualizar(1, {nome: 'produto11', preco: 110})
        console.log("Atualizar: ", atualizarProduto1)
    } catch (error) {
        console.log(error)
    }

    try {
        const atualizarProduto2 = await produtosNegocio.atualizar(7, {nome: 'produto22'})
        console.log("Atualizar: ", atualizarProduto2)
    } catch (error) {
        console.log(error)
    }
    
    // DELETAR //
    try {
        const deletarProduto = await produtosNegocio.deletar(5)
        console.log("Deletar: ", deletarProduto)
    } catch (error) {
        console.log(error)
    }

    try {
        const deletarProduto = await produtosNegocio.deletar()
        console.log("Deletar: ", deletarProduto)
    } catch (error) {
        console.log(error)
    }
    
}

main()