// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// const maximalSquare = (mtx) => {
//     let max = 0; 
//     for(let i = 0; i < mtx.length; i++) {
//         for(let j = 0; j < mtx[0].length; j++) {
//             if(mtx[i][j] === "1") {
//                 max = Math.max(max, findSquare(mtx, i, j))
//             }
//         }
//     }
//     return max * max; 
// };
// let findSquare = (mtx, row, col) => {
//     let size = 0; 
//     while(true) {
//         size++
//         for(let i = col; i < size + col; i++) {
//             if(!mtx[row + size] || mtx[row + size][i] !== "1") return size;
//         }
//         for(let i = row; i <= size + row; i++) {
//             if(!mtx[i] || mtx[i][col + size] !== "1") return size; 
//         }
//     }
// }

let maximalSquare = function(mtx) {
    let max = 0;
    let mlen = mtx.length;
    let rowLen = mlen ? mtx[0].length : 0;

    // Creates new matrix of same length with -1 vals
    let mtxCopy =  [...Array(mlen + 1)].map(row => Array(rowLen + 1).fill(-1));

    let go = (row, col) => {
        // if pos in matric copy is greater than -1, return it; if there is no positive val at pos, mtxCopy at pos is becomes 0;
        if(mtxCopy[row][col] > -1) return mtxCopy[row][col]; 
        if(!(row || col)) return mtxCopy[row][col] = 0;
        
        let bestPos = 0;
        if(mtx[row-1][col-1] == 1) {
            bestPos = 1 + Math.mix(go(row-1, col-1), go(row, col-1), go(row-1, col));
            max = Math.max(max, Math.pow(bestPos, 2));
            return mtxCopy[row][col] = bestPos;
        }
    };

    for(let row = 1; row < mlen; row++) {
        for(let col = 1; col < rowLen; col++) {
            go(row, col);
        }
    }
    return max;
};

let mtx = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
];

console.log(maximalSquare(mtx))