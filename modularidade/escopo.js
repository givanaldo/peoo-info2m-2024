let cor = "azul"; // Escopo global

function mostrarCor() {
	let cor = "vermelha"; // Escopo de função (local)
	console.log(cor); // Saída: vermelha
}

mostrarCor();
console.log(cor); // Saída: azul