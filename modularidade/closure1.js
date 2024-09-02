function contador() {
	let count = 0;
	return function() {
		count++;
		return count;
	}
}

const minhaContagem = contador();
console.log(minhaContagem()); // Saída: 1
console.log(minhaContagem()); // Saída: 2
console.log(minhaContagem());
console.log(minhaContagem()); 
console.log(minhaContagem()); 