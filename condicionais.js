/* condicionais  - if */
let idade = 17
if (idade >= 18) {
    console.log("Você é maior de idade.")
    console.log("Já pode ser preso.")
}
console.log("Terminou!")

/* condicionais - if, else */
let hora = 9;
if (hora < 12) {
    console.log("Bom dia!");
} 
else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

/* operador ternário */
let situacao = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(situacao);

let media_final = 55;
situacao = (media_final >= 60) ? "Aprovado!" : "Reprovado";
console.log(`Média ${media_final}, está ${situacao}`);

/* Exercícios
    - verificar se um número é positivo, negativo ou neutro.
    - verificar a situação do aluno após calcular a média de quatro bimestres.
*/