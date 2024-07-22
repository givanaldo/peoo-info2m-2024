const A = [[ 0,  5, 13], 
           [ 1,  2,  2], 
           [ 4,  1,  5]];

const B = [[ 2,  2, 32], 
           [ 9, 12, 12], 
           [14, 19, 23]];

const C = somaMatrizes(A, B);
console.table(A);
console.table(B);
console.table(C);

function somaMatrizes(mA, mB) {
    let soma = [];
    for (let i = 0; i < mA.length; i++) {
            soma[i] = [];
            for (let j = 0; j < mA[i].length; j++) {
                    soma[i][j] = mA[i][j] + mB[i][j];
            }
    }
    return soma;
}