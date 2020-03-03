
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
    // create shallow copy; maintaining ref to original array, and sort
    let result = nums.slice().sort((a, b) => a-b);
    let map = new Map();

    for (let i = result.length - 1; i >= 0; i--) { 
        // start at end of copied array; set map to array value and index in array
        map.set(result[i], i);
    }
    
    // loop through original array; redefine current value[idx] of copied array to value[key] of map
    // Map { 8 => 4, 4 => 3, 2 => 1, 1 => 0 }
        // in map: key 8 has value 4; there are 4 numbers smaller than 8
        // in map: key 4 has value 3; there are 3 numbers smaller than 4
        // in map: key 2 has value 1; there is 1 number smaller than 2
        // in map: key 1 has value 0; there are no smaller numbers for 1

    nums.forEach((val, idx) => {
        result[idx] = map.get(val)

        // num[0] = 8; result[0] = map[8] => 4
        // num[1] = 1; result[1] = map[1] => 0
        // num[2] = 2; result[2] = map[2] => 1
        // num[3] = 2; result[3] = map[2] => 1
        // num[4] = 4; result[4] = map[4] => 3
    });
    
    return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 4]))