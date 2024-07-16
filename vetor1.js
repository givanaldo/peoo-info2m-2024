/*
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);
console.log(frutas.toString());
console.log(frutas.join(", "));
let numeros = [2, 5, 6, 7, 8, 0, 10, 12];
console.log(numeros);
*/

let compras = ["Maçã", 2, "Banana", 4, "Laranja", 10];

for (let i=0; i<compras.length; i=i+2)
    console.log(`${compras[i]} - ${compras[i+1]} unidades`);