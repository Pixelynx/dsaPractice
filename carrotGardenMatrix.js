let mtx = [[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]];

let mid = Math.floor(mtx.length / 2)
let count = 0;

for (let i = 0; i <= mtx.length; i++) {
    let idx;
    let midIdx;
    let highestNum = 0;

    if (mtx % 2) {
        midIdx = mtx[mid]
    } else {
        midIdx = [mtx[mid - 1], mtx[mid]]
        idx = [mid - 1, mid]
        for (let j = 0; j <= midIdx.length; j++) {

        }

    }
    console.log(highestNum)
}
