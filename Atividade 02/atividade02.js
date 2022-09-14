const produtos = {
    itens: [
        {
            id: 1,
            nome_prod: 'Pão',
            preco_prod: 5.55
        }
    ]
}

////////////////////////////////////////////////////////////

function inserirItens(dados) {

    produtos.itens.push({
        id: produtos.itens.length + 1,
        nome_prod: dados.nome_prod,
        preco_prod: dados.preco_prod
    })
}

inserirItens({nome_prod: 'Bolo', preco_prod: 7.89})
inserirItens({nome_prod: 'Pão de Queijo', preco_prod: 2.50})
//console.log(produtos.itens)

////////////////////////////////////////////////////////////

function lerItens() {
    return produtos.itens
}

console.log(lerItens())

////////////////////////////////////////////////////////////

function updateItens(id, novoItemNome, novoItemPreco) {
    const atualizar = lerItens().find((item) => {
        return item.id === id;
    });

    //console.log(atualizar)
    atualizar.nome_prod = novoItemNome
    atualizar.preco_prod = novoItemPreco
}

updateItens(2, 'Manteiga', 6.33)
console.log(lerItens())

////////////////////////////////////////////////////////////

function deleteItens(id) {
    const deletar = lerItens().filter((itemAtual) => {
        return itemAtual.id !== id;
    })

    console.log(deletar)
}

deleteItens(3)