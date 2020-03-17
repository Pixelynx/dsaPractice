let pros = [[5, 4], [6, 5], [3, 5], [4, 3],];
// => [4, 0, 15, 6]
// => [2, 3, 0, 1]

function reduceToDistances(arr) {
    return arr.reduce((distances, pro) => {
        distances.push(pro[0])
        return distances;
    }, new Array());
};

function calculatePMS(arr, int) {
    let pmsObj = new Object();

    // equation => (max_distance - distance) * rating
    for(let pro = 0; pro < arr.length; pro++) {
        let distance = 0, rating = 1;
        let PMS = (int - arr[pro][distance]) * arr[pro][rating];
        pmsObj[pro] = PMS;
    };
    return pmsObj;
};

function bestPros(pros, k) {
let max_distance = reduceToDistances(pros);
max_distance = Math.max(...max_distance);

let scores = calculatePMS(pros, max_distance);
let kPros = new Set();

let PMSarr = Object.values(scores).sort((a,b) => b-a).slice(0, k);
console.log(PMSarr)
for(let rating of PMSarr) {
    for(let idx in scores) {
        if(scores[idx] === rating) {
            kPros.add(parseInt(idx))
        };
    };
};

return Array.from(kPros);
};


console.log(bestPros(pros, 6));



// function bestPros(pros, k) {
// // new array of all the distances
// let distanceArr = pros.reduce((distances, pro) => {
//     distances.push(pro[0])
//     return distances;
// }, new Array());

// let max_distance = Math.max(...distanceArr);
// let scores = new Object();
// let kPros = new Set();

// // equation => (max_distance - distance) * rating
// for(let pro = 0; pro < pros.length; pro++) {
//     let distance = 0, rating = 1;
//     let PMS = (max_distance - pros[pro][distance]) * pros[pro][rating];
//     (scores[pro]) = PMS
// }

// let PMSarr = Object.values(scores).sort((a,b) => b-a).slice(0, k);

// for(let rating of PMSarr) {
//     for(let idx in scores) {
//         if(!kPros.has(scores[idx]) && scores[idx] === rating) {
//             kPros.add(parseInt(idx))
//         }
//     }
// }
// return Array.from(kPros);
// };