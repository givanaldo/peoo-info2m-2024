function fatorial(n) {
    let fat = 1;
    for (let i=2; i<=n; i++)
        fat = fat * i;
    return fat;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Digite o número: `, num => {
    console.log(`Fatorial(${num}) = ${fatorial(num)}`)
    readline.close()
 })

