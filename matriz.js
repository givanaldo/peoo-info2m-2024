const A = [[0, 5, 13], 
           [1, 2, 2]];  

const B = [[2, 2, 32], 
           [9, 12, 12]];

console.table(A);
console.table(B);

const C = soma(A, B);
console.table(C);

function soma(X, Y) {
        let Z = [];
        let linhas = X.length;
        let colunas = X[0].length;
        for (let lin = 0; lin < linhas; lin++) {
                Z[lin] = [];
                for (let col = 0; col < colunas; col++) {
                        Z[lin][col] = X[lin][col] + Y[lin][col]; 
                }
        }
        return Z;
}