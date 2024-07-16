let M = [[1, 3, 6], 
         [7, 8, 9], 
         [5, 3, 4]];

let lin = M.length;
let col = M[0].length;

for (let i=0; i<lin; i++)
    for (let j=0; j<col; j++)
        console.log(M[i][j]);

console.table(M);