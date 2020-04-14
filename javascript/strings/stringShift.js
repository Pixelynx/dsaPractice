// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

let stringShift = function(s, shift) {
    
};

let str1 = "abc", shift1 = [[0,1],[1,2]];
let str2 = "abcdefg", shift2 = [[1,1],[1,1],[0,2],[1,3]];
console.log(stringShift("MATCH: ", str1, shift1) === "cab");
console.log(stringShift("OUTPUT: ", str1, shift1));
console.log("EXPECTED: cab");
console.log("______")
console.log(stringShift("MATCH: ", str2, shift2) === "efgabcd");
console.log(stringShift("OUTPUT: ", str2, shift2));
console.log("EXPECTED: efgabcd");