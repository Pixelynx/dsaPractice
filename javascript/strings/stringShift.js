// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

let shiftString = function(s, shifting) {
    let sliced, rightShift, leftShift;
    s = s.split("")

    if(shifting > 0) {
        rightShift = s.length-shifting;
        sliced = s.slice(rightShift)
        s = sliced.concat(s.slice(0, rightShift)).join("");
    } else {
        leftShift = shifting*(-1);
         sliced = s.slice(0, leftShift);
         s = s.slice(leftShift).concat(sliced).join("");
    }
    return s;
}

let stringShift = function(s, shift) {
    let shifting = 0;

    for(let i = 0; i < shift.length; i++) {
        shift[i][0] === 0 ? shifting = shifting - shift[i][1] : shifting = shifting + shift[i][1]
        console.log(shifting)
    }
    
    return shifting !== 0 ? shiftString(s, shifting) : s;
};

let str1 = "abc", shift1 = [[0,1],[1,2]];
let str2 = "abcdefg", shift2 = [[1,1],[1,1],[0,2],[1,3]];

console.log("MATCH => ", stringShift(str1, shift1) === "cab");
console.log("OUTPUT => ", stringShift(str1, shift1));
console.log("EXPECTED: cab");
console.log("==============");
console.log("==============");
console.log("MATCH => ", stringShift(str2, shift2) === "efgabcd");
console.log("OUTPUT => ", stringShift(str2, shift2));
console.log("EXPECTED: efgabcd");