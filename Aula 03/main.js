//let a;
//const a = [];

/*
const a = {};
a.id = 1;
a.id = 2;
console.log("INFO", "Hello World");
if (!a) a= "Hello World";
if (a) {
    console.log("A", a);
}
*/

const x1 = "Não muda";
let x2 = "Variável";
// x1 = "Outro valor"; // vai dar erro --const não muda
x2 = "Outro valor"; // vai funcionar --let é variável

let tipo1 = "string";
let tipo2 = 30.10;
let tipo3 = true;
//console.log("Tipo", typeof(tipo1));
//console.log("Tipo", typeof(tipo2));
//console.log("Tipo", typeof(tipo3));

let tipoObject1 = new Object();
tipoObject1.nome = "Objeto 1";
tipoObject1.idade = 3;
//console.log("Objeto", tipoObject1);

let tipoObject2 = {};
tipoObject2.nome = "Objeto 2";
tipoObject2.idade = 5;
tipoObject2.local = "Porto Alegre";
//console.log("Objeto", tipoObject2);

let tipoObject3 = {
    nome: "Objeto 3",
    idade: 8
};
//tipoObject3.local = "POA";
//console.log("Objeto", tipoObject3.local); // vai dar undefined

//let a = 10, b = 20;

/*
let maior = 0
if (a >= b)
    maior = a
else
    maior = b
*/

//const maior = (a >= b) ?a :b;
//console.log(maior);

//const menor = (a <= b) ?a :b;
//console.log(menor);

let arraySemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta"
];
arraySemana.push("Sábado");
//console.log("Dias", arraySemana);


for (let i = 0; i < arraySemana.length; i++){
    console.log(`Dia ${i+1}`, arraySemana[i])
}


/*
for (let index in arraySemana){
    console.log(`Dia ${+index+1}`, arraySemana[index])
}
*/

//console.log(typeof(+"10")) // transformou a string em number
//console.log(typeof(10+"")) // transformou o number em string

for (let diaSemana of arraySemana) {
    console.log("Dias", diaSemana)
}

function soma(a,b) {
    return a+b;
}

console.log("Soma", soma(30,10))