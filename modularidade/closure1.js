function contador() {
	let count = 0;
	return function() {
		count++;
		return count;
	}
}

const minhaContagem = contador();
console.log(minhaContagem()); 
console.log(minhaContagem()); 
console.log(minhaContagem());
console.log(minhaContagem()); 
console.log(minhaContagem()); 