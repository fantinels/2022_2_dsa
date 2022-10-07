// Só vai funcionar dentro de uma função
const fs = require('fs').promises;

async function escreveArquivo() {
    console.log('1: ', 'Hello');
    await fs.writeFile('testea.txt', 'Hello');

    console.log('2: ', 'Hello');
    await fs.writeFile('testea2.txt', 'Hello');

    console.log('3: ', 'Hello');
}

escreveArquivo();