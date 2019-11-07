// hourglass is an array containing three columns, two rows with three elements and one row with one element
// two for loops; start at idx 0 of row and col
// row and col must be less than or equal to 3
// variable for current sum and largest sum
// var for hourglass arr
// if current sum is larger than largest sum, redefine 
// return largest sum

function hourglassSum(arr) {
    let hourglass = [];
    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            let sum = 0;
            sum += arr[row][col]
            sum += arr[row][col + 1]
            sum += arr[row][col + 2]
            sum += arr[row + 1][col + 1]
            sum += arr[row + 2][col]
            sum += arr[row + 2][col + 1]
            sum += arr[row + 2][col + 2]
            hourglass.push(sum)
        }
    }

    return (hourglass.length > 0 ? Math.max(...hourglass) : 0);

}

let arr = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]

hourglassSum(arr);