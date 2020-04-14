// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

let findMaxLength = function(nums) {
    let count = 0;
    let maxLength = 0;
    let currentLen = 0;
    
    for(let start = 0, end = nums.length-1; ((start && maxLength) <= nums.length) && start < end;) {
        // let start = 0; end = nums.length-1;
        if(nums[start] === nums[end]) {
            console.log("IF: ", nums)
            nums = nums.slice(start+1);
            start = 0;
            end = nums.length-1;
            currentLen = 0;
        } else {
            start++; end--;
            currentLen = nums.length >= 2 ? currentLen+=2 : currentLen+=1;
            console.log("ELSE: ", nums)
            console.log("ELSE: ", currentLen)
        }
        count++;
        maxLength = Math.max(currentLen, maxLength);
    }
    return maxLength;
};

let test1 = [0,1,1];
console.log("OUTPUT: ", findMaxLength(test1));
console.log("EXPECTED OUTPUT: 2");
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

let test2 = [0,1,0];
console.log("OUTPUT: ", findMaxLength(test2));
console.log("EXPECTED OUTPUT: 2");
// Explanation: [0, 1] and [1, 0] is the longest contiguous subarray with equal number of 0 and 1.

let test3 = [0,1,0,0,1,1,0];
console.log("OUTPUT: ", findMaxLength(test3));
console.log("EXPECTED OUTPUT: 6");
// Explanation: [1,0,0,1,1,0] is the longest contiguous subarray with equal number of 0 and 1.