const { Client } = require('pg')

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'crud_produtos',
    user: 'postgres',
    password:'1234'
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

inserir({nome: "produto2", preco: 20})
listar();