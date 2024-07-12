let frutas = ["tamarindo", "cajá", "tomate"]
console.log(frutas)
frutas.push("melão")
frutas.unshift("abacate")
console.log(frutas.toString())
frutas.splice(2, 0, "uva", "framboesa")

//for (let fruta of frutas)
//    console.log(fruta)

console.log(frutas.toString())
//console.log(frutas.join('-'))
//console.log(frutas[-1])
//console.log(frutas.at(-1))
