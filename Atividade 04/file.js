const fs = require('fs');
const fsp = require('fs').promises;

// CALLBACK
function escreveArquivoCallback() {
    fs.writeFile('testeCallback.txt', 'Teste de Callback 1', (err) => {
        if (err) {
            console.log(err);
        }
    
        console.log('1: ', 'Primeiro teste de Callback');
    
        fs.writeFile('testeCallback2.txt', 'Teste de Callback 2', (err) => {
            if (err) {
                console.log(err);
            }
        
            console.log('2: ', 'Segundo teste de Callback');
        });
    });
    
    console.log('3: ', 'Terceiro teste de Callback');
}

// PROMISE
function escreveArquivoPromise() {
    fsp.writeFile('testePromise.txt', 'Teste de Promise 1')
    .then(() => {
        console.log('1: ', 'Primeiro teste de Promise');
        fsp.writeFile('testePromise2.txt', 'Teste de Promise 2')
    })
    .then(() => {
        console.log('2: ', 'Segundo teste de Promise');
    })
    .catch((erro) => console.log(erro));

console.log('3: ', 'Terceiro teste de Promise');
}

// ASYN | AWAIT

// Só vai funcionar dentro de uma função
async function escreveArquivoAsynAwait() {
    console.log('1: ', 'Primeiro teste de Asyn | Await');
    await fsp.writeFile('testeAsynAwait.txt', 'Teste de Asyn | Await 1');

    console.log('2: ', 'Segundo teste de Asyn | Await');
    await fsp.writeFile('testeAsynAwait2.txt', 'Teste de Asyn | Await 2');

    console.log('3: ', 'Terceiro teste de Asyn | Await');
}

module.exports = {
    escreveArquivoCallback,
    escreveArquivoPromise,
    escreveArquivoAsynAwait
}