fs = require('fs');
fs.writeFile('teste.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > teste.txt');
});

console.log('Hello World')

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0

    if (x == 0) {
        myResolve('Deu certo!');
    } else {
        myReject('Deu erro!');
    }
      

});
    
    myPromise.then(
      function(value) { console.log(value) },
      function(error) { console.log(error) }
    );