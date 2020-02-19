// array is passed in as param
// only the highest number will be counted
// return count of the highest number
// keep track of current highest number
// if current element is larger, redefine variable


function birthdayCakeCandles(ar) {
    let highestEl = Number.NEGATIVE_INFINITY;
    let count = 0;

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > highestEl) {
            count = 1; highestEl = ar[i];
        } else {
            if (ar[i] === highestEl) count++;
        }
    }
    return count;
}