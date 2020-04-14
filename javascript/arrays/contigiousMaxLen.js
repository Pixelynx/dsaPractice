// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// let findMaxLength = function (nums) {
//     let maxLength = 0;
//     let currentLen = 0;

//     for (let start = 0, end = nums.length - 1; ((start && maxLength) <= nums.length) && start < end;) {
//         // let start = 0; end = nums.length-1;
//         if (nums[start] === nums[end]) {
//             nums = nums.slice(start + 1);
//             start = 0;
//             end = nums.length - 1;
//             currentLen = 0;
//         } else {
//             start++; end--;
//             currentLen = nums.length >= 2 ? currentLen += 2 : currentLen += 1;
//         }
//         count++;
//         maxLength = Math.max(currentLen, maxLength);
//     }
//     return maxLength;
// };

// let findMaxLength = function(nums) {
//     let obj = new Object();
//     let count = 0;
//     let currentLen = 0;
//     let maxLength = 0;

//     while(count < nums.length-1) {
//         for(let start = count; start <= nums.length-1; start++) {
//             !obj[nums[start]] ? obj[nums[start]] = 1 : obj[nums[start]]++;
//             if(obj['0'] === obj['1']) currentLen = obj['0'] + obj['1'];
//         }
//         obj = new Object();
//         maxLength = Math.max(currentLen, maxLength);
//         count++
//     };

//     return maxLength;
// };

let findMaxLength = function(nums) {
    let maxLength = 0, count = 0; 
    let seenIdx = new Object();

    for(let i = 0; i < nums.length; i++) {
        nums[i] ? count++ : count--;
        if(count === 0) maxLength = i + 1; 
        if(seenIdx[count] !== undefined) {
            maxLength = Math.max(maxLength, i - seenIdx[count])
        } else {
            seenIdx[count] = i;
        }
    }
    return maxLength;
};


let test1 = [0, 1, 1];
console.log("OUTPUT: ", findMaxLength(test1));
console.log("EXPECTED OUTPUT: 2");
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// obj = {
//     0: 1
//     1: 2
// }
// maxLength = 2

let test2 = [0, 1, 0];
console.log("OUTPUT: ", findMaxLength(test2));
console.log("EXPECTED OUTPUT: 2");
// Explanation: [0, 1] and [1, 0] is the longest contiguous subarray with equal number of 0 and 1.
// obj = {
//     0: 2
//     1: 1
// }
// maxLength = 2

// let test3 = [0, 1, 0, 0, 1, 1, 0];
// console.log("OUTPUT: ", findMaxLength(test3));
// console.log("EXPECTED OUTPUT: 6");
// Explanation: [1,0,0,1,1,0] is the longest contiguous subarray with equal number of 0 and 1.
// obj = {
//     0: 4
//     1: 3
// }
// maxLength = 6

// let test4 = [0, 0, 0, 1, 1, 1, 0];
// console.log("OUTPUT: ", findMaxLength(test4));
// console.log("EXPECTED OUTPUT: 6");
// Explanation: [0,0,0,1,1,1] and [0,0,1,1,1,0] is the longest contiguous subarray with equal number of 0 and 1.
// obj = {
//     0: 4
//     1: 3
//  }
 // maxLength = 6
 
//  let test5 = [0,0,1,0,0,0,1,1];
//  console.log("OUTPUT: ", findMaxLength(test5));
//  console.log("EXPECTED OUTPUT: 6");
 // Explanation: [1,0,0,0,1,1] is the longest contiguous subarray with equal number of 0 and 1.
 // obj = {
 //     0: 4
 //     1: 3
 //  }
  // maxLength = 6