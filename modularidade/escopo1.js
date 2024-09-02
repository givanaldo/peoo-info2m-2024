let cor = "azul"; 

function mostrarCor() {
	const cor = "vermelha"; 
	return cor; 
}

function mostraOutraCor() {
	cor = "bege";
	return cor;
}
console.log("Cor fora da função: ", cor);4
console.log("Cor dentro da função: ", mostraOutraCor());
console.log("Cor dentro da função: ", mostrarCor());
