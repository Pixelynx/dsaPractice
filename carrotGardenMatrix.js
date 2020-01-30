// let garden = [
//     [5, 7, 8, 6, 3],
//     [0, 0, 7, 0, 4],
//     [4, 6, 3, 4, 9],
//     [3, 1, 0, 5, 8]
// ];

// const carrotGarden = (mtx) => {

//     // CREATE VARIABLE FOR NUMBER OF CARROTS EATEN
//     // CREAT VARIABLE FOR CURRENT SQUARE
//     // CREATE LOOP
//     // CREATE VARIABLE FOR TOP => [ROW-1][COL]
//     // CREATE VARIABLE FOR LEFT => [ROW][COL-1]
//     // CREATE VARIABLE FOR RIGHT => [ROW][COL+1]
//     // CREATE VARIABLE FOR BOTTOM => [ROW+1][COL]
//     // GRAB INDEX MIDDLE MOST ARRAY(S)
//     // GRAB MIDDLE INDEX OF ARRAY
//     // IF EVEN NUMBER OF ROWS, CHECK IF LEFT, RIGHT, OR BOTTOM ARE GREATER
//         // IF TRUE -- GRAB INDEX OF GREATEST NUMBER
//     // CHECK TOP, LEFT, RIGHT AND BOTTOM OF INDEXED NUMBER FOR LARGEST NUMBER OVER 0
//         // IF NUMBER EXISTS, ADD TO COUNT
//         // IF NO NUMBER OVER 0 EXISTS, RETURN NUMBER OF CARROTS EATEN 

//     let carrotsEaten = 0;
//     let mid = Math.floor(mtx.length / 2);
    
//     for(let row = 0; row <= mtx.length; row++) {
//         let currentIdx = [];
//         let currentMidSquares = [];
        
//         // IF MATRIX HAS EVEN NUMBER OF ROWS, PUSH TWO MIDDLE ARRAYS
//         if(!(mid%2)) {
//             currentMidSquares.push(mtx[mid - 1], mtx[mid]); // => currentMidSquares = [[0, 0, 7, 0, 4], [4, 6, 3, 4, 9]]
//             // currrentMidSquares ZEROTH INDEX[0, 0], FIRST INDEX[0, 1] index values => [[1, 2], [2, 2]]

//             // IF MIDDLE INDEX OF FIRST MIDDLE ARRAY IS GREATER THAN THE MIDDLE INDEX OF SECOND MIDDLE ARRAY, REDEFINE "CURRENT" WITH ZEROTH INDEX VALUE OF THE CURRENT MIDDLE SQUARES' INDEX => 1; 
//             // ELSE IF MIDDLE INDEX OF SECOND MIDDLE ARRAY IS GREATER THAN THE MIDDLE INDEX OF THE FIRST MIDDLE ARRAY, REDEFINE "CURRENT" WITH FIRST INDEX VALUE OF THE CURRENT MIDDLE SQUARES' INDEX => 2
//             currentIdx = currentMidSquares[0][mid] > currentMidSquares[[1][mid]] ? [0, [mid]] : [1, mid];

//             // DEFINE VARIABLES FOR LEFT AND RIGHT OF CURRENT VALUES; FOR READABILITY
//             let leftIdx = [currentIdx[0], currentIdx[1] - 1];
//             let rightIdx = [currentIdx[0], currentIdx[1] + 1];

//             // CHECK IF LEFT OR rightIdx ELEMENTS OF CURRENT INDEX HAVE A GREATER ELEMENT VALUE
//             if (mtx[leftIdx[0]][leftIdx[1]] > mtx[currentIdx[0][currentIdx[1]]]) currentIdx = [leftIdx[0]][leftIdx[1]];
//             if (mtx[rightIdx[0]][rightIdx[1]] > mtx[currentIdx[0][currentIdx[1]]]) currentIdx = [rightIdx[0]][rightIdx[1]];
//         } 
        
//         carrotsEaten += mtx[currentIdx[0]][[currentIdx[1]]];
        
//         for(col = 0; col < mtx.length; col++) {
//             let currentSquare = currentIdx;
//             let mostCarrots = 0;
//             let highestValIdx;
            
//             row = currentSquare[0], col = currentSquare[1];
//             let topIdx = [row-1, col];
//             let topVal = mtx[topIdx[0]][[topIdx[1]]];
//             leftIdx = [row, col-1];
//             let leftVal = mtx[leftIdx[0]][[leftIdx[1]]];
//             rightIdx = [row, col+1];
//             let rightVal = mtx[rightIdx[0]][[rightIdx[1]]];
//             let bottomIdx = [row+1, col];
//             let bottomVal = mtx[bottomIdx[0]][[bottomIdx[1]]];
//             // let sidesOfCurrent = [topVal, leftVal, rightVal, bottomVal]
//             // console.log(sidesOfCurrent)
            
//             if ((topVal) && topVal > mostCarrots) { mostCarrots = topVal; highestValIdx = topIdx; } // => [0, 2]
//             if ((leftVal) && leftVal > mostCarrots) { mostCarrots = leftVal; highestValIdx = leftIdx; }
//             if ((rightVal) && rightVal > mostCarrots) { mostCarrots = rightVal; highestValIdx = rightIdx; }
//             if ((bottomVal) && bottomVal > mostCarrots) { mostCarrots = bottomVal; highestValIdx = bottomIdx; }
            
//             carrotsEaten += mostCarrots;
//             mtx[currentSquare[0]][currentSquare[1]] = 0;
//             currentSquare = highestValIdx;
//             highestValIdx = [];

//             // console.log('CURRENT MOST CARROTS: ', mostCarrots)
//             // console.log('CURRENT CARROTS EATEN: ', carrotsEaten)

//             mostCarrots = 0;

//             // console.log('MOST CARROTS CLEARED: ', mostCarrots)

//         //    current = mtx.indexOf(Math.max(...sidesOfCurrent))
//         //    console.log(mostCarrots)
//         }

        
//     }

//     return carrotsEaten;
// }

// console.log(carrotGarden(garden));






// NON-COMMENTED CODE

let garden = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [0, 0, 8, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];

const checkOddEven = (arr) => {
    if(arr.length % 2 === 0) {
        return arr[arr.length%2]
    } else {
        return arr[arr.length%2 - 1]
    }
}

const carrotGarden = (mtx) => {

    let carrotsEaten = 0;
    let startingIdx = [];
    let squareEaten = false;
    let currentSquare = startingIdx;
    let mid = (mtx.length % 2 === 0) ? mtx[Math.floor(mtx.length / 2)] : mtx[Math.floor(mtx.length / 2) - 1];
    let row, col;

        let currentMidSquares = [];

            // DEFINE CURRENT MIDDLE ARRAY(S) AND SET STARTING INDEX
            
            // CHECK IF CURRENT MIDDLE ARRAYS LENGTH IS EVEN
                // PUSH TWO MIDDLE; SET STARTING INDEX TO MIDDLE WITH GREATEST VALUE
            if(mtx.length % 2 === 0) {
                currentMidSquares.push(mtx[mid - 1], mtx[mid]); 
                startingIdx = currentMidSquares[0][mid] > currentMidSquares[[1][mid]] ? [0, [mid]] : [1, mid];
            } else {
                // CHECK IF CURRENT MIDDLE ARRAYS LENGTH IS ODD
                    // PUSH SINGLE MIDDLE; SET STARTING INDEX TO MIDDLE WITH GREATEST VALUE
                currentMidSquares.push(mtx[mid]); 
                console.log(mid)
                startingIdx = [0, [mid]];
            }


            // DEFINE LEFT AND RIGHT INDECIES
            let leftIdx = [startingIdx[0], startingIdx[1] - 1];
            let rightIdx = [startingIdx[0], startingIdx[1] + 1];

            // IF NUM OF CARROTS TO LEFT OF STARTING INDEX CARROTS IS GREATER; REDEFINE
            if (mtx[leftIdx[0]][leftIdx[1]] > mtx[startingIdx[0][startingIdx[1]]]) {
                startingIdx = [leftIdx[0]][leftIdx[1]];
            }
            // IF NUM OF CARROTS TO RIGHT OF STARTING INDEX CARROTS IS GREATER; REDEFINE
            if (mtx[rightIdx[0]][rightIdx[1]] > mtx[startingIdx[0][startingIdx[1]]]) {
                startingIdx = [rightIdx[0]][rightIdx[1]];
            }

        // SET AMOUNT OF CARROTS EATEN; SET SQUARE EATEN TO "TRUE"; SET CURRENT SQUARE TO STARTING IDX
        carrotsEaten += mtx[startingIdx[0]][[startingIdx[1]]];
        squareEaten = true;
        currentSquare = startingIdx;

    // WHILE squareEaten IS "TRUE"; REDEFINE squareEaten TO "FALSE"
    while (squareEaten) {
        squareEaten = false;

            // DEFINE A CURRENT MOST CARROTS VARIABLE AND VARIABLE FOR INDEX IS MOST CARROTS
            let mostCarrots = 0;
            let highestValIdx;

            // REDEFINE ROW AND COLUMN VARIABLES WITH APPROPRIATE SQUARE INDEX
            // FOR DEFINING VALUES: CHECK IF ANY INDEX OF SQUARE IS A NEGATIVE VALUE,
                // IF NEGATIVE FOUND: SET VARIABLE TO -1
                // IF NO NEGATIVES: SET VARIABLE TO VALUE OF SQUARE
            row = currentSquare[0], col = currentSquare[1];
            let topIdx = [row - 1, col];
            let topVal = topIdx[0] < 0 || topIdx[1] < 0 ? -1 : mtx[topIdx[0]][[topIdx[1]]];
            let bottomIdx = [row + 1, col]; 
            let bottomVal = bottomIdx[0] < 0 || bottomIdx[1] < 0 ? -1 : mtx[bottomIdx[0]][[bottomIdx[1]]];
            leftIdx = [row, col - 1], 
            rightIdx = [row, col + 1];
            let leftVal = leftIdx[0] < 0 || leftIdx[1] < 0 ? -1 : mtx[leftIdx[0]][[leftIdx[1]]]; 
            let rightVal = rightIdx[0] < 0 || rightIdx[1] < 0 ? -1 : mtx[rightIdx[0]][[rightIdx[1]]];

            // CHECK TOP, LEFT, RIGHT, AND BOTTOM SQUARES FOR LARGEST VALUE
            if (topVal > mostCarrots) { 
                mostCarrots = topVal; 
                highestValIdx = topIdx;
            }
            if (leftVal > mostCarrots) { 
                mostCarrots = leftVal; 
                highestValIdx = leftIdx; 
            }
            if (rightVal > mostCarrots) { 
                mostCarrots = rightVal; 
                highestValIdx = rightIdx; 
            }
            if (bottomVal > mostCarrots) { 
                mostCarrots = bottomVal; 
                highestValIdx = bottomIdx; 
            }
            
            // ADD mostCarrots VALUE TO carrotsEaten; IF mostCarrots DOES NOT EQUAL 0, SET squareEaten TO "TRUE"
            carrotsEaten += mostCarrots;
            if(mostCarrots !== 0) squareEaten = true;

            // RESET mostCarrots VARIABLE TO "0"
            // CHANGE CURRENT VALUE IN CURRENT SQUARE TO "0"
            // REDEFINE CURRENT SQUARE TO highestValIdx IF EXISTS, ELSE SET AS EMPTY ARRAY
            mostCarrots = 0;
            mtx[currentSquare[0]][currentSquare[1]] = 0;
            currentSquare = highestValIdx ? highestValIdx : [];

    }

    return carrotsEaten;
}

console.log(carrotGarden(garden));