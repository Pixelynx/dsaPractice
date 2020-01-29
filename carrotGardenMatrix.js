let garden = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];

const carrotGarden = (mtx) => {

    // CREATE VARIABLE FOR NUMBER OF CARROTS EATEN
    // CREAT VARIABLE FOR CURRENT SQUARE
    // CREATE LOOP
    // CREATE VARIABLE FOR TOP => [ROW-1][COL]
    // CREATE VARIABLE FOR LEFT => [ROW][COL-1]
    // CREATE VARIABLE FOR RIGHT => [ROW][COL+1]
    // CREATE VARIABLE FOR BOTTOM => [ROW+1][COL]
    // GRAB INDEX MIDDLE MOST ARRAY(S)
    // GRAB MIDDLE INDEX OF ARRAY
    // IF EVEN NUMBER OF ROWS, CHECK IF LEFT, RIGHT, OR BOTTOM ARE GREATER
        // IF TRUE -- GRAB INDEX OF GREATEST NUMBER
    // CHECK TOP, LEFT, RIGHT AND BOTTOM OF INDEXED NUMBER FOR LARGEST NUMBER OVER 0
        // IF NUMBER EXISTS, ADD TO COUNT
        // IF NO NUMBER OVER 0 EXISTS, RETURN NUMBER OF CARROTS EATEN 

    let carrotsEaten = 0;
    let mid = Math.floor(mtx.length / 2)

    for(let row = 0; row <= mtx.length; row++) {
        let currentMidSquares = [];
        let current = [];
        
        if(!(mid%2)) {
            currentMidSquares.push(mtx[mid - 1], mtx[mid]) // => currentMidSquares = [[0, 0, 7, 0, 4], [4, 6, 3, 4, 9]]
        } 
        
        current = currentMidSquares[0][mid] > currentMidSquares[[1][mid]] ? [[0], [mid]] : [1, mid]
        
        let left = [current[0], current[1]-1];
        let right = [current[0], current[1]+1];

        for(col = 0; col < mtx.length; col++) {
            row = current[0], col = current[1]
            let top = [row-1, col];
            left = [row, col-1];
            right = [row, col+1];
            let bottom = [row+1, col];

            // if()
        }
    }

    // return carrotsEaten;
}

console.log(carrotGarden(garden));