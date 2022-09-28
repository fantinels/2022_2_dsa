let listaProdutos = [
    {id: 1, nome: 'Produto 1', preco: 10},
    {id: 2, nome: 'Produto 2', preco: 20},  
    {id: 3, nome: 'Produto 3', preco: 30}   
]
let idGerado = 3

////////////////////////////////////////////////////////////
function geradorId() {
    return ++idGerado
}

////////////////////////////////////////////////////////////
function init() {
    listaProdutos = [
        {id: 1, nome: 'Produto 1', preco: 10},
        {id: 2, nome: 'Produto 2', preco: 20},  
        {id: 3, nome: 'Produto 3', preco: 30}   
    ]
}

////////////////////////////////////////////////////////////
function inserir(produto) {
    produto.id = geradorId()
    listaProdutos.push(produto)
    
}

////////////////////////////////////////////////////////////
function listar() {
    return listaProdutos
}

////////////////////////////////////////////////////////////
function buscarPorId(id) {
    for(let produto of listaProdutos) {
        if(produto.id == id) {
            return produto
        }
    }

    //console.log("Erro", "Id não encontrado")

    throw "Id não encontrado";
}

////////////////////////////////////////////////////////////
function atualizar(id, produtoAlterado) {
    for(let produto of listaProdutos) {
        if(produto.id == id) {
            if (produtoAlterado.nome) {
                produto.nome = produtoAlterado.nome
            }
            if (produtoAlterado.preco) {
                produto.preco = produtoAlterado.preco
            }
            return produto;
        }
    }
    
    throw "Id não encontrado";
    
}

////////////////////////////////////////////////////////////
function deletar(id) {
    for (let indice in listaProdutos) {
        if (listaProdutos[indice].id == id) {
            const deletados = listaProdutos.splice(indice, 1)
            
            return deletados[0];
        }
    }

    throw "Id não encontrado";
    
}

////////////////////////////////////////////////////////////
module.exports = {
    init,
    inserir,
    listar,
    buscarPorId,
    atualizar,
    deletar
}