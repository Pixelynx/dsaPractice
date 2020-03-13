// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

const subtractProductAndSum = (n) => {
    let prod, sum;
    n = n.toString().split("");
    for(let i = 0; i < n.length; i++) {

    }
    return n
};

console.log(subtractProductAndSum(234));
// output => 15