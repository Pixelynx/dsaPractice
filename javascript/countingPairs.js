function countPairs(numbers, k) {
    // takes in an array of ints and a number
    // if an int in the array plus the number [k] equals another value in the array; count++
    // get all unique values using set
    // shift values in set adding to [k], if the outcome is an int included in array count++
    let count = 0;
    let uniquePairs = new Set(numbers);
    uniquePairs.forEach(num => {
        if(uniquePairs.has(num + k)) {
            count++;
        }
        uniquePairs.delete(num)
    })
    return count;
}

console.log(countPairs([ 1, 1, 2, 2, 3, 3], 1))