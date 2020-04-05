// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

let maxSubArray = function(nums) {
    let max = nums[0];
    for (let curr = 1; curr < nums.length; curr++) {
        // if previous number is greater than 0; add it to current number -- nums[curr]
        if (nums[curr - 1] > 0) {
            nums[curr] += nums[curr - 1];
        }
        // if nums[curr] is greater than max redefine max; else max = max
        max = Math.max(nums[curr], max);
    }
    return max;
};

let arr = [-2,1,-3,4,-1,2,1,-5,4];
// => [4,-1,2,1]
console.log("OUTPUT: ", maxSubArray(arr));
console.log("EXPECTED OUTPUT: 6");

