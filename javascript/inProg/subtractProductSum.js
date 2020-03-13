// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// const subtractProductAndSum = (n) => {
//     let prod = 1, sum = 0;
//     n = n.toString().split("");
//     n = n.map(num => num = Number(num));

//     for(let i = 0; i < n.length; i++) {
//         prod = prod * n[i];
//         sum = sum + n[i];
//     }
//     return Math.max(prod-sum);
// };

// const subtractProductAndSum = (n) => {
//     n = n.toString().split("");
//     n = n.map(num => num = Number(num));

//     let prod = n.reduce((n1, n2) => n1*n2);
//     let sum = n.reduce((n1, n2) => n1+n2);

//     return Math.max(prod-sum);
// }

const subtractProductAndSumRecurse = (n) => {

};

console.log(subtractProductAndSum(234));
// output => 15