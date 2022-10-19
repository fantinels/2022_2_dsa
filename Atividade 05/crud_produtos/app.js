const { Client } = require('pg')

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'crud_produtos',
    user: 'postgres',
    password:'postgres'
}

async function listar() {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM produtos');
    console.log(res.rows);

    await cliente.end();

}
async function inserir(produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('INSERT INTO produtos(nome,preco) VALUES ($1,$2)', 
        [produto.nome, produto.preco]);
    console.log(res.rows);

    await cliente.end();

}

async function deletar(produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('DELETE FROM produtos WHERE id = $1', 
        [produto.id]);
    console.log(res.rows);

    await cliente.end();

}

async function atualizar(produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('UPDATE produtos SET nome = $1, preco = $2 WHERE id = $3', 
        [produto.nome, produto.preco, produto.id]);
    console.log(res.rows);

    await cliente.end();

}

async function buscarPorId(produto) {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM produtos WHERE id = $1', 
        [produto.id]);
    console.log(res.rows);

    await cliente.end();

}


inserir({nome: "produto5", preco: 50})
listar();

deletar({id: 2})
listar();

atualizar({nome: "produto8", preco: 50, id: 7})
listar()

buscarPorId({id: 4})
listar()