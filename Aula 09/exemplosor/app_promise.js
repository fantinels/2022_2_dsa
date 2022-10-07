const fs = require('fs').promises;

fs.writeFile('testep.txt', 'Hello World')
    .then(() => {
        console.log('1: ', 'Hello');
        fs.writeFile('testep2.txt', 'Hello')
    })
    .then(() => {
        console.log('2: ', 'Hello');
    })
    .catch((erro) => console.log(erro));

console.log('3: ', 'Hello');