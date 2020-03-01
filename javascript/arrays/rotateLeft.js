// have an array (a)
// shift element off array and push it to the end for num of times (d)
// for let i = 0; i <= d; i++
// let shiftedEl = arr.shift()
// arr.push(shiftedEl)

function rotLeft(a, d) {
    for (let i = 1; i <= d; i++) {
        let shiftedEl = a.shift();
        a.push(shiftedEl);
    }
    return a;
}

let arr = [1, 2, 3, 4, 5];
// output => [5, 1, 2, 3, 4]

rotLeft(arr, 4)