function fatorial(n) {
    let fat = 1;
    for (let i=2; i<=n; i++)
        fat = fat * i;
    return fat;
}

console.log(fatorial(5));