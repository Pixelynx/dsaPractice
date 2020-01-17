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
        midIdx = [mtx[mid - 1], mtx[mid]]
        // console.log(midIdx)
        for (let j = 0; j < midIdx.length; j++) {
            let currentMid = midIdx[j]
             console.log(currentMid[Math.floor(currentMid.length/2)])
            
        }
    }
    // console.log(highestNum)
}
