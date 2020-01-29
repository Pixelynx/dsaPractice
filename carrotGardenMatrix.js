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
        
        // IF MATRIX HAS EVEN NUMBER OF ROWS, PUSH TWO MIDDLE ARRAYS
        if(!(mid%2)) {
            currentMidSquares.push(mtx[mid - 1], mtx[mid]) // => currentMidSquares = [[0, 0, 7, 0, 4], [4, 6, 3, 4, 9]]
            // currrentMidSquares ZEROTH INDEX[0, 0], FIRST INDEX[0, 1] index values => [[1, 2], [2, 2]]
        } 
        
        // IF MIDDLE INDEX OF FIRST MIDDLE ARRAY IS GREATER THAN THE MIDDLE INDEX OF SECOND MIDDLE ARRAY, REDEFINE "CURRENT" WITH ZEROTH INDEX VALUE OF THE CURRENT MIDDLE SQUARES' INDEX => 1; 
            // ELSE IF MIDDLE INDEX OF SECOND MIDDLE ARRAY IS GREATER THAN THE MIDDLE INDEX OF THE FIRST MIDDLE ARRAY, REDEFINE "CURRENT" WITH FIRST INDEX VALUE OF THE CURRENT MIDDLE SQUARES' INDEX => 2
        current = currentMidSquares[0][mid] > currentMidSquares[[1][mid]] ? [0, [mid]] : [1, mid]
        
        // DEFINE VARIABLES FOR LEFT AND RIGHT OF CURRENT VALUES; FOR READABILITY
        let left = [current[0], current[1]-1];
        let right = [current[0], current[1]+1];

        // CHECK IF LEFT OR RIGHT ELEMENTS OF CURRENT INDEX HAVE A GREATER ELEMENT VALUE
        if (mtx[left[0]][left[1]] > mtx[current[0][current[1]]]) current = [left[0]][left[1]];
        if (mtx[right[0]][right[1]] > mtx[current[0][current[1]]]) current = [right[0]][right[1]];

        console.log(mtx[left[0]][left[1]])

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