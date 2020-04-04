// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

let maxSubArray = function(nums) {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            console.log(nums[i], nums[i - 1])
            nums[i] += nums[i - 1];
        }
        console.log('MAX SUM: ', maxSum)
        maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
};

let arr = [-2,1,-3,4,-1,2,1,-5,4];
// => [4,-1,2,1]
console.log("OUTPUT: ", maxSubArray(arr));
console.log("EXPECTED OUTPUT: 6");

