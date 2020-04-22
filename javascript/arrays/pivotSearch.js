let search = function(nums, target) {
    const offset = findSmallest(nums);
    let low = 0;
    let high = nums.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        let newMid = (mid + offset ) % nums.length;
        
        if(nums[newMid] === target) return newMid;
        if(nums[newMid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }      
    }
    return -1
};

let findSmallest = function(arr) {
    let start = 0;
    let end = arr.length - 1
    while(start < end) {
       let midIdx = Math.floor((start + end) / 2);
        if(arr[midIdx] > arr[end]) {
            start = midIdx + 1
        } else {
            end = midIdx
        }
    }
    return end;
};


let nums1 = [4,5,6,7,0,1,2];
let target1 = 0;

let nums2 = [4,5,6,7,0,1,2];
let target2 = 3;
console.log(search(nums1, target1));