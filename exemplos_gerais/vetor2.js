const numeros = [2, 3, 7, 8, 10];
console.log(numeros.toString());

const quadrados = numeros.map(function(num) {
    return num ** 2; });
console.log(quadrados.toString());

let resultado = numeros.filter(function(num) {
    return num > 5; })
console.log(resultado.toString());

resultado = numeros.reduce(function(total, num) { 
    return total + num; }, 0);
console.log(resultado);

const frutas = ["tamarindo", "cajá", "tomate"]
resultado = frutas.filter(function(fruta){
    return fruta.length >= 6});
console.log(resultado.toString());