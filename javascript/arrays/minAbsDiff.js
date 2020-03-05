// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// const minimumAbsDifference = (arr) => {
//     arr = arr.sort((a, b) => a-b);
//     let minAbs = Number.POSITIVE_INFINITY;
//     let minPairs;

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i+1] - arr[i] < minAbs) {
//             minAbs = arr[i+1] - arr[i];
//             minPairs = new Array();
//             minPairs.push(new Array(arr[i], arr[i+1]));
//         } else {
//             if(arr[i+1] - arr[i] === minAbs) minPairs.push(new Array(arr[i], arr[i+1]));
//         }
//     };

//     return minPairs;
// };

const minimumAbsDifference = (arr) => {
    arr = arr.sort((a, b) => a-b);
    
}

let arr = [4,2,1,3];

console.log(minimumAbsDifference(arr));