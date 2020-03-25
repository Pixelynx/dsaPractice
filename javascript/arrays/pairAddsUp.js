// Write a function that takes an integer and an unsorted array of numbers
// and returns true if there's any pair of numbers in that array that can be
// summed up to the input integer.

const pairAddsUp = (arr, target) => {
    arr = arr.sort((a, b) =>  a-b);

    function diffMakesTarget(num, target, arr) {
        if(!arr.length) return false;
        if((arr[0] !== num) && (arr[0] + num === target)) return true;
        else return diffMakesTarget(num, target, arr.slice(1))
    };

    for(let num of arr) {
        if(diffMakesTarget(num, target, arr) === true) return true;
    };

    return false;
};

console.log(pairAddsUp([1,3,5,4,2], 8));
console.log("EXPECTED OUTPUT: ", true);
console.log("_____");
console.log(pairAddsUp([1,3,5,4,2], 2));
console.log("EXPECTED OUTPUT: ", false);