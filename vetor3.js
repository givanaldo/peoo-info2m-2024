const numeros = [2, 3, 7, 8, 10];
console.log(numeros.toString());

const quadrados = numeros.map((num) => num ** 2);
console.log(quadrados.toString());

let resultado = numeros.filter((num) => num%2 == 0)
console.log(resultado.toString());

let soma = numeros.reduce((total, num) => total + num, 0);
console.log(soma);

soma = 0;
for (let n of numeros)
    soma = soma + n;
console.log(soma);

const frutas = ["tamarindo", "cajá", "tomate"]
resultado = frutas.filter(function(fruta){
    return fruta.length >= 6});
console.log(resultado.toString());