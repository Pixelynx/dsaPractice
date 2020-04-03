let singleNumber = function(nums) {
    let newSet = new Set();
    for(let num of nums) !newSet.has(num) ? newSet.add(num) : newSet.delete(num);
    return parseInt(Array.from(newSet));
};

let test1 = [2, 2, 1];
let test2 = [4, 1, 2, 1, 2];
console.log("OUTPUT 1: ", singleNumber(test1));
console.log("Expected output 1.");
console.log("OUTPUT 2: ", singleNumber(test2));
console.log("Expected output 4.");