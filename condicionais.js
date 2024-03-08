/* condicionais  - if */
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

/* condicionais - if, else */
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

/* operador ternário */
let situacao = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(situacao);

/* Exercícios
    - verificar se um número é positivo, negativo ou neutro.
    - verificar a situação do aluno após calcular a média de quatro bimestres.
*/