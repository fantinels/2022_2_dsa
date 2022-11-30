const produtosNegocio = require('./negocio/produto_negocio')

async function main() {

    // INSERIR //
    // try {
    //     const produtoInserido1 = await produtosNegocio.inserir({nome: "produto4", preco: 40})
    //     console.log("Produto inserido: ", produtoInserido1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
    
    // try {
    //     const produtoInserido2 = await produtosNegocio.inserir({nome: "produtoY"})
    //     console.log("Produto inserido: ", produtoInserido2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // LISTAR //
    const listaProdutos = await produtosNegocio.listar()
    console.log("Lista produtos: ", listaProdutos)

    // BUSCAR POR ID //
    // try {
    //     const buscarId1 = await produtosNegocio.buscarPorId(1)
    //     console.log("Buscar por ID: ", buscarId1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
    
    // try {
    //     const buscarId2 = await produtosNegocio.buscarPorId(7)
    //     console.log("Buscar por ID: ", buscarId2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // BUSCAR POR NOME //
    // try {
    //     const buscarNome1 = await produtosNegocio.buscarPorNome('produto1')
    //     console.log("Buscar por Nome: ", buscarNome1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
    
    // try {
    //     const buscarNome2 = await produtosNegocio.buscarPorNome()
    //     console.log("Buscar por Nome: ", buscarNome2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // ATUALIZAR //
    // try {
    //     const atualizarProduto1 = await produtosNegocio.atualizar(1, {nome: 'produto11', preco: 11})
    //     console.log("Atualizar: ", atualizarProduto1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // try {
    //     const atualizarProduto2 = await produtosNegocio.atualizar(1, {nome: 'produto1', preco: '10a'})
    //     console.log("Atualizar: ", atualizarProduto2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // try {
    //     const atualizarProduto2 = await produtosNegocio.atualizar(10, {nome: 'produto1', preco: 10})
    //     console.log("Atualizar: ", atualizarProduto2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // try {
    //     const atualizarProduto2 = await produtosNegocio.atualizar(1, {preco: 10})
    //     console.log("Atualizar: ", atualizarProduto2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }


    // DELETAR //
    // try {
    //     const deletarProduto1 = await produtosNegocio.deletar(5)
    //     console.log("Deletar: ", deletarProduto1)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }

    // try {
    //     const deletarProduto2 = await produtosNegocio.deletar(20)
    //     console.log("Deletar: ", deletarProduto2)
    // } catch (error) {
    //     console.log("Erro: ", error)
    // }
    
    
}

main()