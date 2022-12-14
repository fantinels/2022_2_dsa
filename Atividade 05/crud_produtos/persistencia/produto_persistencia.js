const { Client }  = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const cliente = new Client(conexao)

    await cliente.connect();

    const res = await cliente.query('SELECT * FROM produtos ORDER BY id');

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

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}