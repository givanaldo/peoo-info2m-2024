let frutas = ["tamarindo", "cajá", "tomate"]
frutas.push("melão")
frutas.unshift("abacate")
frutas.splice(2, 0, "uva", "framboesa")

frutas.forEach(function(fruta){
    console.log(fruta)
})

for (let i=0; i<frutas.length; i++)
    console.log(frutas[i])

for (let fruta of frutas)
    console.log(fruta)

//console.log(frutas.toString())
//console.log(frutas.join('-'))
//console.log(frutas[-1])
//console.log(frutas.at(-1))
