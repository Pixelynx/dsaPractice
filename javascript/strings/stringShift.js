// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// let shiftString = function(s, shifting) {
//     let sliced, rightShift, leftShift;
//     s = s.split("")

//     if(shifting > 0) {
//         rightShift = s.length-shifting;
//         sliced = s.slice(rightShift)
//         s = sliced.concat(s.slice(0, rightShift)).join("");
//     } else {
//         leftShift = shifting*(-1);
//          sliced = s.slice(0, leftShift);
//          s = s.slice(leftShift).concat(sliced).join("");
//     }
//     return s;
// }

// let stringShift = function(s, shift) {
//     let shifting = 0;

//     for(let i = 0; i < shift.length; i++) {
//         shift[i][0] === 0 ? shifting = (shifting - shift[i][1])%s.length : shifting = (shifting + shift[i][1])%s.length
//     }
//     return shifting !== 0 ? shiftString(s, shifting) : s;
// };

let stringShift = function(s, shift) {
    let shiftCount = 0;
    shift.forEach(arr => {
      let [ direction , amount ] = arr;
      direction ? shiftCount -= amount : shiftCount += amount;
    });
    let rotate = shiftCount % s.length;
    return s.slice(rotate) + s.slice(0,rotate);
  };

let str1 = "abc", shift1 = [[0,1],[1,2]];
let str2 = "abcdefg", shift2 = [[1,1],[1,1],[0,2],[1,3]];
let str3 = "xqgwkiqpif", shift3 = [[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]];

// console.log("MATCH => ", stringShift(str1, shift1) === "cab");
// console.log("OUTPUT => ", stringShift(str1, shift1));
// console.log("EXPECTED: cab");
// console.log("==============");
// console.log("==============");
// console.log("MATCH => ", stringShift(str2, shift2) === "efgabcd");
// console.log("OUTPUT => ", stringShift(str2, shift2));
// console.log("EXPECTED: efgabcd");
// console.log("==============");
// console.log("==============");
console.log("MATCH => ", stringShift(str3, shift3) === "qpifxqgwki");
console.log("OUTPUT => ", stringShift(str3, shift3));
console.log("EXPECTED: qpifxqgwki");