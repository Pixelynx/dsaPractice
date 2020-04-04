let moveZeroes = function(nums) {
    let pointerA = 0, pointerB;

    while(pointerA !== nums.length) {
        let temp;
        console.log(pointerA, pointerB)
        if(nums[pointerA] === 0) {
            pointerB = pointerA;
        } else if(nums[pointerA] !== 0) {
            temp = nums[pointerB];
            console.log('temp: ', temp)
            console.log('nums[A]: ', nums[pointerA])
            console.log('nums[B]: ', nums[pointerB])
            
            nums[pointerB] = nums[pointerA];
            nums[pointerA] = temp;
            console.log('new nums[A]: ', nums[pointerA])
            console.log('new nums[B]: ', nums[pointerB])
            console.log('END CYCLE: ', nums)
        }
        pointerA++;
    }
    return nums
};

// let moveZeroes = function(nums) {
//     let pointerA = 0, pointerB;

//     while(pointerA !== nums.length-1) {
//         let temp;
//         if(nums[pointerA] === 0) pointerB = pointerA; 
//         else if(nums[pointerA] !== 0 && nums[pointerB] === 0) {
//             temp = nums[pointerA];
//             nums[pointerB] = nums[pointerA];
//             nums[pointerA] = temp;
//         }
//         pointerA++;
//     }
// };

let arr = [0,1,0,3,12];

console.log("OUTPUT: ", moveZeroes(arr));
console.log("EXPECTED OUTPUT: [1,3,12,0,0]")