let countElements = function(arr) {
    arr = arr.sort();
    let count = 0;
    let notFound = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(!notFound.has(arr[i])) {
            if(arr.includes(arr[i]+1)) count++;
        }
    };

    return count;
};

let arr1 = [1,2,3];
console.log("OUTCOME: ", countElements(arr1));
console.log("EXPECTED OUTPUT: 2");
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

let arr2 = [1,1,3,3,5,5,7,7];
console.log("OUTCOME: ", countElements(arr2));
console.log("EXPECTED OUTPUT: 0");
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

let arr3 = [1,3,2,3,5,0];
console.log("OUTCOME: ", countElements(arr3));
console.log("EXPECTED OUTPUT: 3");
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

let arr4 = [1,1,2,2];
console.log("OUTCOME: ", countElements(arr4));
console.log("EXPECTED OUTPUT: 2");
// Explanation: Two 1s are counted cause 2 is in arr.