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

const puzzleContainsWord = (puzzle, word) => {

}

console.log(`The puzzle contains the word ${word_1}: ${puzzleContainsWord(puzzle, word_1)}`);
console.log(`The puzzle contains the word ${word_2}: ${puzzleContainsWord(puzzle, word_2)}`);
console.log(`The puzzle contains the word ${word_3}: ${puzzleContainsWord(puzzle, word_3)}`);
console.log(`The puzzle contains the word ${word_4}: ${puzzleContainsWord(puzzle, word_4)}`);
console.log(`The puzzle contains the word ${word_5}: ${puzzleContainsWord(puzzle, word_5)}`);
console.log(`The puzzle contains the word ${word_6}: ${puzzleContainsWord(puzzle, word_6)}`);

// word_1 => TRUE
// word_2 => FALSE
// word_3 => FALSE
// word_4 => TRUE
// word_5 => TRUE
// word_6 => FALSE