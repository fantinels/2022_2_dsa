const { Client } = require('pg')

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'crud_produtos',
    user: 'postgres',
    password:'1234'
}

async function listar() {
    const cliente = new Client(conexao) // inicialização do cliente

    await cliente.connect(); // conectar com o BD

    const res = await cliente.query('SELECT * FROM produtos ORDER BY id'); // fazer a query

    await cliente.end();

    return res.rows;

}

async function buscarPorId(id) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM produtos WHERE id = $1', 
        [id]);

    await cliente.end();

    return res.rows[0];

}

async function inserir(produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('INSERT INTO produtos(nome,preco) VALUES ($1,$2) RETURNING *', 
        [produto.nome, produto.preco]);

    await cliente.end();

    return res.rows[0];

}

async function atualizar(id, produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('UPDATE produtos SET nome = $1, preco = $2 WHERE id = $3 RETURNING *', 
        [produto.nome, produto.preco, id]);

    await cliente.end();

    return res.rows[0];

}

async function deletar(id) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('DELETE FROM produtos WHERE id = $1 RETURNING *', 
        [id]);

    await cliente.end();

    return res.rows[0];

}

async function main() {
    //const produtoInserido = await inserir({nome: "produto3", preco: 50})
    //console.log("Produto inserido: ", produtoInserido)

    const listaProdutos = await listar()
    console.log("Lista produtos: ", listaProdutos)

    const buscarId = await buscarPorId(3)
    console.log("Buscar por ID: ", buscarId)

    const atualizarProduto = await atualizar(1, {nome: 'produto11', preco: 100})
    console.log("Atualizar: ", atualizarProduto)

    const deletarProduto = await deletar(13)
    console.log("Deletar: ", deletarProduto)
    
}

main()