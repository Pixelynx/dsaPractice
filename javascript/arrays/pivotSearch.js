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