// GIVEN A 2D ARRAY OF LETTERS, RETURN TRUE IF THE MATRIX CONTAINS A WORD. THE PATHS THAT CAN BE TAKEN ARE HORIZONTAL, VERTICAL, AND DIAGONAL.

let puzzle = [
  ['H', 'W', 'C', 'A', 'T'],
  ['B', 'T', 'O', 'M', 'E'],
  ['D', 'E', 'Q', 'U', 'D'],
  ['S', 'A', 'W', 'G', 'I'],
  ['M', 'D', 'O', 'R', 'E']
];

let word_1 = "CAT";
let word_2 = "MUD";
let word_3 = "RUDE";
let word_4 = "TEA";
let word_5 = "BEAR";
let word_6 = "HAPPY"

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

const puzzleContainsWord = (puzzle, word) => {
​
}
​
console.log(`The puzzle contains the word ${word_1}: ${puzzleContainsWord(puzzle, word_1)}`);
console.log(`Expected: TRUE`);
console.log(`The puzzle contains the word ${word_2}: ${puzzleContainsWord(puzzle, word_2)}`);
console.log(`Expected: FALSE`);
console.log(`The puzzle contains the word ${word_3}: ${puzzleContainsWord(puzzle, word_3)}`);
console.log(`Expected: FALSE`);
console.log(`The puzzle contains the word ${word_4}: ${puzzleContainsWord(puzzle, word_4)}`);
console.log(`Expected: TRUE`);
console.log(`The puzzle contains the word ${word_5}: ${puzzleContainsWord(puzzle, word_5)}`);
console.log(`Expected: TRUE`);
console.log(`The puzzle contains the word ${word_6}: ${puzzleContainsWord(puzzle, word_6)}`);
console.log(`Expected: FALSE`);