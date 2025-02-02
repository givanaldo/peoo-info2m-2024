// Função nomeada
function soma(a, b) {
    return a + b;
}
// Função anônima
let produto = function(a, b) {
    return a * b;
};

console.log(soma(5, 4));
console.log(produto(4, 3));

// passagem de parâmetros
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("João");

// retorno de valores
function quadrado(x) {
    return x * x;
}

let resultado = quadrado(5);
console.log("O quadrado de 5 é: " + resultado);


// escopo de variáveis
let global = "Variável global";

function teste() {
    let local = "Variável local";
    console.log(local); // Acesso à variável local
    console.log(global); // Acesso à variável global
}
teste();
//console.log(local); // Erro: local is not defined


/* Exercícios
    - função que calcula o fatorial de um número
    - função que calcula a média de quatro notas
*/

