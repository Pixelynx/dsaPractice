
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).


// const smallerNumbersThanCurrent = (nums) => {

//     // let newArr = [];
//     // for(let i = 0; i < nums.length; i++) {
//     //     let currentCount = 0;
//     //     for(let j = 0; j < nums.length; j++) {
//     //         if(nums[i] > nums[j] && nums[j] !== nums[i]) currentCount++
//     //     }
//     //     newArr.push(currentCount)
//     //     currentCount = 0;
//     // }
//     // return newArr;

//     let newArr = [];
//     nums = nums.sort((a,b) =>  b-a)
//     let currentNum = nums.shift();
//     newArr.push(nums.length)
    
// };

var smallerNumbersThanCurrent = function(nums) {
    let result = nums.slice().sort((a, b) => a - b);
    let map = new Map();
    for (let i = result.length - 1; i >= 0; i--) { // iterate from end, in cases like [7,7,7,7] we will have first index
        map.set(result[i], i);
        console.log(result[i], i)
    }
    
    nums.forEach((v, i) => result[i] = map.get(v));
    
    return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 4]))