let mtx = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];

let mid = Math.floor(mtx.length / 2)
let count = 0;

for (let i = 0; i <= mtx.length; i++) {
    let idx;
    let midIdx;
    let highestNum = 0;

    if (mtx % 2) {
        midIdx = mtx[mid]
    } else {
        // IF MATRIX HAS ODD NUMBER OF ROWS
        let currentHigh = 0;
        midIdx = [mtx[mid - 1], mtx[mid]]
        // console.log(midIdx)
        // LOOP TWO MIDDLE ROWS
        for (let j = 0; j < midIdx.length; j++) {
            let currentMid = midIdx[j]
            if (currentMid[Math.floor(currentMid.length / 2)] > currentHigh) {
                currentHigh = currentMid[Math.floor(currentMid.length / 2)]
            }
        }
        console.log(currentHigh)
    }
    // console.log(highestNum)
}
