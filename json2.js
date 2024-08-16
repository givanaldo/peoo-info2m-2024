let pessoa = {
	nome: "João",
	idade: 30,
	profissao: { empresa: "Google", cargo: "Desenvolvedor"},
	exibir: function() {
		return `Nome: ${this.nome}, Idade: ${this.idade}, 
		Profissão: ${this.profissao.cargo} (${this.profissao.empresa})`
	}
};

console.log(pessoa.exibir());

let jsonString = JSON.stringify(pessoa, null, 2);
//let jsonString = JSON.stringify(pessoa);
console.log(jsonString);


jsonString = '{"nome":"Maria","idade":25,"profissao":"Analista"}';
pessoa = JSON.parse(jsonString);
console.log(pessoa);
