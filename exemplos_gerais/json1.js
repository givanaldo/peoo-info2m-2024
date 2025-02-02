const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor",
	saudacao: function() {
		return `Olá, meu nome é ${this.nome}, tenho
        ${this.idade} anos e sou ${this.profissao}`;
	}
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.saudacao());
pessoa.idade = 32;
pessoa.profissao = "Cozinheiro";
console.log(pessoa.saudacao());
console.log("\n\n");
console.log(pessoa);
console.log('gerando String JSON');
const strJson = JSON.stringify(pessoa);
console.log(strJson);