let moveZeroes = function(nums) {
    let pointerA = 0, pointerB;

    while(pointerA !== nums.length-1) {
        let temp;
        if(nums[pointerA] === 0) pointerB = pointerA; 
        else if(nums[pointerA] !== 0 && nums[pointerB] === 0) {
            temp = nums[pointerA];
            nums[pointerB] = nums[pointerA];
            nums[pointerA] = temp;
        }
        pointerA++;
    }
};

let arr = [0,1,0,3,12];

console.log("OUTPUT: ", moveZeroes(arr));
console.log("EXPECTED OUTPUT: [1,3,12,0,0]")