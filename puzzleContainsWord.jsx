// GIVEN A 2D ARRAY OF LETTERS, RETURN TRUE IF THE MATRIX CONTAINS A WORD. THE PATHS THAT CAN BE TAKEN ARE HORIZONTAL, VERTICAL, AND DIAGONAL.

let puzzle = [
  ["H", "W", "C", "A", "T"],
  ["B", "T", "O", "M", "E"],
  ["D", "E", "Q", "U", "D"],
  ["S", "A", "W", "G", "I"],
  ["M", "D", "O", "R", "E"]
];

let word_1 = "CAT";
let word_2 = "MUD";
let word_3 = "RUDE";
let word_4 = "TEA";
let word_5 = "BEAR";
let word_6 = "HAPPY";

// CREATE VARIABLE FOR COUNT BASED ON LENGTH OF WORD PASSED IN
// CREATE VARIABLE FOR THE CURRENT LETTER IN PUZZLE
// CREATE VARIABLE FOR PLACEHOLDER
// LOOP PUZZLE SEARCHING ROWS FOR FIRST CHARACTER IN WORD
// IF FIRST CHARACTER FOUND, CHECK TOP, LEFT, RIGHT, DOWN FOR FOLLOWING CHARACTER
// ** CHECK DIAGONALS ** //
// IF FOLLOWING CHARACTER FOUND, REPEAT SEARCH IN SAME DIRECTION
// IF FOLLOWING CHARACTER NOT FOUND; SET COUNT BACK TO ORIGINAL; SET PLACEHOLDER VARIABLE TO THE NEXT INDEX

// IF COUNT VARIABLE HITS 0; RETURN TRUE
// RETURN FALSE IF VARIABLE NEVER HITS 0

const checkLeft = () => {};
const checkRight = () => {};
const checkTop = () => {};
const checkDown = () => {};

// const puzzleContainsWord = (puzzle, word) => {
//   let charsLeft = word.length;
//   let startingPlace = [];

//   for (let row = 0; row < puzzle.length; row++) {
//     for (let col = 0; col <= puzzle[row].length; col++) {
//         console.log(row, "here")
//       let currLeftLett = puzzle[row][col];
//       let currDownLett;

//       if(puzzle[row+1][col]) {
//           currDownLett = puzzle[row+1][col]
//       }

//       if (currLeftLett === word[word.length - charsLeft]) {
//         charsLeft--;
//       } else {
//         charsLeft = word.length;
//       }
//       if (charsLeft === 0) return true;
//     }
//   }

//   return false;
// };

// const checkHorizontal = (puzzle, word, idx, count) => {
//     let nextChar = puzzle[idx[0]][idx[1]+1];

//     if(count === word.length) return true;
//     if(nextChar === word[count]) {
//         count++; idx[1] = idx[1]+1;
//     } else {
//         count = 0; return
//     }
//     return checkHorizontal(puzzle, word, idx, count);
// }

// const checkVertical = (puzzle, word, idx, count) => {
//     let nextChar = puzzle[idx[0]+1][idx[1]];

//     if(count === word.length) return true;
//     if(nextChar === word[count]) {
//         count++; idx[1] = idx[1]+1;
//     } else count = 0; return
    
//     return checkVertical(puzzle, word, idx, count);
// }

// console.log(checkVertical(puzzle, word_4, [1, 1], 1))

const tryAllDirections = (puzzle, word, idx, count) => {
    let checkHorizontal = (!puzzle[idx[0]][idx[1]+1] in puzzle) ? -1 : puzzle[idx[0]][idx[1]+1];
    let checkVertical = (!puzzle[idx[0]+1][idx[1]] in puzzle) ? -1 : puzzle[idx[0]+1][idx[1]];
    let checkDiagonal = (!puzzle[idx[0]+1][idx[1]+1] in puzzle) ? -1 : puzzle[idx[0]+1][idx[1]+1];
    console.log('CHECK HORIZONTAL: ', checkHorizontal)
    
    if(count === word.length) return true;
    if(checkHorizontal === word[count]) {
        count++;
        console.log(word[count])
        return tryAllDirections(puzzle, word, idx, count);
    } else {
        if((checkVertical !== -1) && checkVertical === word[count]) {
            count++;
            console.log(word[count])
            return tryAllDirections(puzzle, word, idx, count)
        } else {
            if(checkDiagonal === word[count]) {
                count++;
                console.log(word[count]) 
                return tryAllDirections(puzzle, word, idx, count);
            }
        }
    }
    return false;
}

const puzzleContainsWord = (puzzle, word) => {
    let count = 0;
    let startingIdx;
    // let horizontalExists, verticalExists, diagonalExists = false;

    for(let row = 0; row < puzzle.length; row++) {
        for(let col = 0; col < puzzle[0].length; col++) {
            if(puzzle[row][col] === word[count]) {
                count++; startingIdx = [row, col];
                return tryAllDirections(puzzle, word, startingIdx, count) ? true : false;
            }
        }
        // if(count === word.length) return true;
        // if(horizontalExists || verticalExists) return true
    }
    // return false;
}

console.log(`The puzzle contains the word ${word_1}: ${puzzleContainsWord(puzzle, word_1)}`);
console.log(`Expected: TRUE`);
console.log('___')
console.log(`The puzzle contains the word ${word_2}: ${puzzleContainsWord(puzzle, word_2)}`);
console.log(`Expected: FALSE`);
console.log('___')
console.log(`The puzzle contains the word ${word_3}: ${puzzleContainsWord(puzzle, word_3)}`);
console.log(`Expected: FALSE`);
console.log('___')
console.log(`The puzzle contains the word ${word_4}: ${puzzleContainsWord(puzzle, word_4)}`);
console.log(`Expected: TRUE`);
console.log('___')
console.log(`The puzzle contains the word ${word_5}: ${puzzleContainsWord(puzzle, word_5)}`);
console.log(`Expected: TRUE`);
console.log('___')
console.log(`The puzzle contains the word ${word_6}: ${puzzleContainsWord(puzzle, word_6)}`);
console.log(`Expected: FALSE`);
console.log('___')