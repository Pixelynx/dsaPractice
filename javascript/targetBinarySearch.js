const binarySearchTarget = (nums, target) => {
    for(let left = 0, right = nums.length-1; left <= right;) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target) return mid;
        else {
            if(nums[mid] < target) left = mid+1;
            else right = mid-1;
        }
    }
    return -1
}

console.log(binarySearchTarget([-1,0,3,5,9,12], 9))
                            //   0,1,2,3,4,5 
                            //   1,2,3,4,5,6 
// Math.floor(nums.length)/2 => length 6; returns [3] => 5 EVEN NUMBER OF ELS
// Math.floor(nums.length)/2 - 1 => length 6; returns [2] => 3  ODD NUMBER OF ELS