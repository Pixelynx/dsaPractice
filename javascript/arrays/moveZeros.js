let moveZeroes = function(nums) {
    let pointerA = 0, pointerB = 1;

        if(nums.length === 2 && (nums[pointerA] === 0 && nums[pointerB] !== 0)) [nums[pointerA], nums[pointerB]] = [nums[pointerB], nums[pointerA]];
      
        if(nums.length > 2) {
            while((pointerA !== pointerB) && (pointerA && pointerB) !== null) {
                if(nums[pointerA] === 0 && nums[pointerB] !== 0) pointerB = pointerA, pointerA++;
                else if((nums[pointerA] !== 0 && nums[pointerB] === 0)) {
                    [nums[pointerA], nums[pointerB]] = [nums[pointerB], nums[pointerA]];
                    pointerA++, pointerB++;
                } else if((nums[pointerA] && nums[pointerB]) === 0) pointerA++;
            }
        }
    return nums;
};

let arr = [1,0,0];
// [1, 0]

console.log("OUTPUT: ", moveZeroes(arr));
console.log("EXPECTED OUTPUT: [1,3,12,0,0]")