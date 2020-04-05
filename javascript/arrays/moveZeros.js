let moveZeroes = function(nums) {
    let zeroPointer, nonZeroPointer = 0;

        if(nums.length > 1) {
            while(((nonZeroPointer || zeroPointer) !== nums.length) && ((nums[nonZeroPointer] && nums[zeroPointer]) !== null)) {
                if(nums[zeroPointer] !== 0) {
                    if(nums[nonZeroPointer] === 0) {
                        zeroPointer = nonZeroPointer;
                    } 
                    nonZeroPointer++;
                } else {
                    if(nonZeroPointer !== nums.length && nums[nonZeroPointer] !== 0) {
                        [nums[nonZeroPointer], nums[zeroPointer]] = [nums[zeroPointer], nums[nonZeroPointer]];
                        nonZeroPointer++, zeroPointer++;
                    } else if(nonZeroPointer !== nums.length && nums[nonZeroPointer] === 0) {
                        nonZeroPointer++
                    }
                }
            }
        }
};


let arr = [0, 1, 0];
let otherray = [0,1,0,3,12]
// [1, 0z, 0] nz
// [1, 0]

console.log("OUTPUT: ", moveZeroes(otherray));
console.log("EXPECTED OUTPUT: [1,3,12,0,0]")