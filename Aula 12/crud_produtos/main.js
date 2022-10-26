const produtosPersistencia = require('./persistencia/produto_persistencia')
const produtosNegocio = require('./negocio/produto_negocio')

async function main() {

    try {
        const produtoInserido1 = await produtosNegocio.inserir({nome: "produtoX", preco: 30})
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

    const listaProdutos = await produtosPersistencia.listar()
    console.log("Lista produtos: ", listaProdutos)

    const buscarId = await produtosPersistencia.buscarPorId(1)
    console.log("Buscar por ID: ", buscarId)

    const atualizarProduto = await produtosPersistencia.atualizar(1, {nome: 'produto1', preco: 10})
    console.log("Atualizar: ", atualizarProduto)

    const deletarProduto = await produtosPersistencia.deletar(3)
    console.log("Deletar: ", deletarProduto)
    
}

main()