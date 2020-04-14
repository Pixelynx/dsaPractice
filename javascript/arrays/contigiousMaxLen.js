// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

let findMaxLength = function(nums) {
    
};

let test1 = [0,1];
console.log("OUTPUT: ", findMaxLength(test1));
console.log("EXPECTED OUTPUT: 2");
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

let test2 = [0,1,0,0,1,1,0];
console.log("OUTPUT: ", findMaxLength(test2));
console.log("EXPECTED OUTPUT: 6");
// Explanation: [1,0,0,1,1,0] is the longest contiguous subarray with equal number of 0 and 1.