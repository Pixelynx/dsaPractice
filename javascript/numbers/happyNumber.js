// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

let isHappy = function(n) {
    n = n.toString().split("");
    console.log(parseInt(Math.pow(n.shift(), 2)))
    console.log(n)
    if(!n.length) return 0;
    if(n.length > 0) {
        return parseInt(Math.pow(n.shift(), 2)) + isHappy(n);
    }
    // return n
    // return n === 1 ? true : false;
};

console.log("OUTPUT: ", isHappy(192));
console.log("EXPECTED OUTPUT: TRUE")

// Input: 19
// Output: true
// Explanation: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1
