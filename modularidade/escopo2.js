function add() {
    let cont = 0;
    return function() {
        cont = cont + 1;
        return cont;
    }
}

const addUm = add();
console.log(addUm());
console.log(addUm());
cont = 30;
console.log(addUm());
console.log(addUm());
console.log(addUm());
