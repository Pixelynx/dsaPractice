// Given an array nums of integers, return how many of them contain an even number of digits.
 
// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2

// const findNumbers = (nums) => {
//     nums = nums.map(num => num.toString());
//     let evenCount = 0;

//     nums.forEach(num => {
//         if(num.length%2 === 0) evenCount++;
//     })
//     return evenCount;
// };

const findNumbers = (nums) => {
    return nums.filter(num => num.toString().length % 2 === 0).length;
};

console.log(findNumbers([12,345,2,6,7896]));