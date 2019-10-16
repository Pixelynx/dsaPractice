// accepts a square matrix, will return boolean on whether or not it is magicSquare
function isMagicSquare(mat) {
    const n = mat.length;
    let diagonalSum = 0;
    let diagonalSum2 = 0;
    // calculate the sum of first diagonal:
    for (let i = 0; i < n; i++) {
        diagonalSum += mat[i][i];
        diagonalSum2 += mat[i][n - i - 1];
    }

    // compare diagonal sums to see if equal. If not, mat is not magic square
    if (diagonalSum !== diagonalSum2) return false;

    // calculate sum of each row and compare to diagonal:
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += mat[i][j];
        }
        if (rowSum !== diagonalSum) return false;
    }

    // calculate sum of each col and compare to diagonal:
    for (let i = 0; i < n; i++) {
        let colSum = 0;
        for (let j = 0; j < n; j++) {
            colSum += mat[j][i];
        }
        if (colSum !== diagonalSum) return false;
    }

    // returns true if all rows / cols / diags are equal
    return true;
}

// generate all sub-matrices:
function generateSubMatrices(mat) {
    // get max val of possible rows / cols sub-matrices can have
    const rows = mat.length;
    const cols = mat[0].length;
    const subMatrices = [];
    // get all possible row / col ranges for sub-matrices using the length of arg mat row/col length
    const rowCombinations = generateAllCombinations(rows);
    const colCombinations = generateAllCombinations(cols);

    // using all row / col ranges, generate sub-matrices
    for (let row of rowCombinations) {
        const startingRow = row[0];
        const endingRow = row[1];
        for (let col of colCombinations) {
            const startingCol = col[0];
            const endingCol = col[1];

            // generate single sub-matrix based on row and col starting and endpoints
            subMatrices.push(
                generateSubMatrix(mat, startingRow, endingRow, startingCol, endingCol)
            );
        }
    }
    return subMatrices;
}

// create all combinations for different row / col ranges
function generateAllCombinations(val) {
    const combinations = [];
    for (let startIndex = 0; startIndex < val; startIndex++) {
        for (let endIndex = startIndex + 1; endIndex < val + 1; endIndex++) {
            combinations.push([startIndex, endIndex]);
        }
    }
    return combinations;
}

// create sub-matrix with row/col range
function generateSubMatrix(
    mat,
    startingRow,
    endingRow,
    startingCol,
    endingCol
) {
    const subMat = [];
    for (let i = startingRow; i < endingRow; i++) {
        const row = [];
        for (let j = startingCol; j < endingCol; j++) {
            row.push(mat[i][j]);
        }
        subMat.push(row);
    }
    return subMat;
}

const mat = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];

// get sub-matrices minus the single val and non square ones
const subMats = generateSubMatrices(mat).filter(
    subM => subM.length === subM[0].length && subM.length > 1
);

for (let mat of subMats) {
    console.log(isMagicSquare(mat), mat, mat.length);
}