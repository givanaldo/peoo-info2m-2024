let msg1 = "String com aspas duplas";
let msg2 = 'String com aspas simples';
let msg3 = `String com crase`;

console.log(msg1);
console.log(msg2);
console.log(msg3);

const nome = 'Fulano';
const idade = 15;

console.log(nome + ' tem ' + idade + ' anos de idade.');
console.log(`${nome} tem ${idade} anos de idade.`);

console.log(typeof(msg1));
console.log(typeof(idade));

let nota = 9.5;
console.log(typeof(nota));

console.log(5 == 5);
console.log(5 === 5);
console.log(5 == '5');
console.log(5 === '5');

console.log('\nTabela-verdade AND');
for (let a=0; a<=1; a++) {
    for (let b=0; b<=1; b++) {
        console.log(`${a}  ${b} | ${a && b}`);
    }
}

console.log('\nTabela-verdade OR');
for (let a=0; a<=1; a++) {
    for (let b=0; b<=1; b++) {
        console.log(`${a}  ${b} | ${a || b}`);
    }
}
