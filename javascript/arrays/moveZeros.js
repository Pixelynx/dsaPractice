let moveZeroes = function(nums) {
    let zeroPointer = 0, nonZeroPointer = 1;

        if(nums.length === 2 && (nums[nonZeroPointer] === 0 && nums[zeroPointer] !== 0)) [nums[nonZeroPointer], nums[zeroPointer]] = [nums[zeroPointer], nums[nonZeroPointer]];
      
        if(nums.length > 2) {
            while(((nonZeroPointer || zeroPointer) !== nums.length) && ((nums[nonZeroPointer] && nums[zeroPointer]) !== null)) {
                console.log(nonZeroPointer, zeroPointer)
                // if(nonZeroPointer === zeroPointer) nonZeroPointer++;
                if(nums[nonZeroPointer] === 0 && nums[zeroPointer] !== 0) {
                    [nums[nonZeroPointer], nums[zeroPointer]] = [nums[zeroPointer], nums[nonZeroPointer]];
                    [nonZeroPointer, zeroPointer] = [zeroPointer, nonZeroPointer];
                    nonZeroPointer++, zeroPointer++;
                } 
                else if(nums[nonZeroPointer] !== 0 && nums[zeroPointer] === 0) {
                    if(nonZeroPointer > zeroPointer){
                        [nums[nonZeroPointer], nums[zeroPointer]] = [nums[zeroPointer], nums[nonZeroPointer]];
                    }
                    nonZeroPointer++, zeroPointer++;
                } else if(nums[nonZeroPointer] === 0 && nums[zeroPointer] === 0) nonZeroPointer++;
            }
        }
    return nums;
};


let arr = [0, 0, 1];
let otherray = [0,1,0,3,12]
// [0a, 0b, 1]

console.log("OUTPUT: ", moveZeroes(arr));
console.log("EXPECTED OUTPUT: [1,3,12,0,0]")