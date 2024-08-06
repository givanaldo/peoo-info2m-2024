let pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor"
};

// let jsonString = JSON.stringify(pessoa, null, 2);
let jsonString = JSON.stringify(pessoa);
console.log(jsonString);


jsonString = '{"nome":"João","idade":30,"profissao":"Desenvolvedor"}';
pessoa = JSON.parse(jsonString);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);