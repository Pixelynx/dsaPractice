// let moveZeroes = function(nums) {
//     let zeroPointer, nonZeroPointer = 0;

//         if(nums.length > 1) {
//             while(((nonZeroPointer || zeroPointer) !== nums.length) && ((nums[nonZeroPointer] && nums[zeroPointer]) !== null)) {
//                 if(nums[zeroPointer] !== 0) {
//                     if(nums[nonZeroPointer] === 0) {
//                         zeroPointer = nonZeroPointer;
//                     } 
//                     nonZeroPointer++;
//                 } else {
//                     if(nonZeroPointer !== nums.length && nums[nonZeroPointer] !== 0) {
//                         [nums[nonZeroPointer], nums[zeroPointer]] = [nums[zeroPointer], nums[nonZeroPointer]];
//                         nonZeroPointer++, zeroPointer++;
//                     } else if(nonZeroPointer !== nums.length && nums[nonZeroPointer] === 0) {
//                         nonZeroPointer++
//                     }
//                 }
//             }
//         }
// };

// let moveZeroes = function(nums) {
//     let zeroPointer = 0, nonZeroPointer = 0;
    
//     while(nonZeroPointer !== nums.length) {
//         if(nums[nonZeroPointer] === 0 && nums[zeroPointer]!== 0) [zeroPointer, nonZeroPointer] = [nonZeroPointer, zeroPointer];
//         if(nums[zeroPointer] === 0 && nums[nonZeroPointer] !== 0) [nums[zeroPointer++], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[zeroPointer]]
//         nonZeroPointer++;
//     }
// }

let moveZeroes = function (nums) {
    let pointer = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
            pointer++
        } 
    }
};


let arr = [0, 1];
let otherray = [0, 1, 0, 3, 12]
// [1, 0]

console.log("OUTPUT: ", moveZeroes(otherray));
console.log("EXPECTED OUTPUT: [1,3,12,0,0]")