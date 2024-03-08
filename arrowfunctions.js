// Função tradicional
function soma(a, b) {
    return a + b;
}

// Arrow function
let somaArrow = (a, b) => a + b;


let saudacao = () => {
    return "Olá, mundo!";
};
console.log(saudacao()); // "Olá, mundo!"


let quadrado = (x) => {
    return x * x;
};
console.log(quadrado(5)); // 25


let cubo = x => x * x * x;
console.log(cubo(3)); // 27


let numeros = [1, 2, 3, 4, 5];
let quadrados = numeros.map(x => x * x);
console.log(quadrados); // [1, 4, 9, 16, 25]


