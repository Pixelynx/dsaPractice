let pros = [[3, 5], [4, 3], [6, 5], [3, 5]];
// => [15, 6, 0, 15]
// => [0, 3, 1]


function calculateScore(arr, obj, maxDistance) {
    // equation => (max_distance - distance) * rating
    for(let pro = 0; pro < arr.length; pro++) {
        let distance = 0, rating = 1;
        let PMS = (maxDistance - arr[pro][distance]) * arr[pro][rating];
        (obj[pro]) = PMS;
    };
};

function addBestPros(rating, obj, set) {
    for(let idx in obj) {
        if(!set.has(obj[idx]) && obj[idx] === rating) {
            set.add(parseInt(idx))
        };
    };
};

function calcMaxDistance(arr) {
    return arr.reduce((distances, pro) => {
        distances.push(pro[0])
        return distances.sort((a, b) => a-b).slice(-1);
    }, new Array());
};

function bestPros(pros, k) {
    // new array of all the distances
    let max_distance = calcMaxDistance(pros);
    let scores = new Object();
    calculateScore(pros, scores, max_distance);
    
    let PMSarr = Object.values(scores).sort((a,b) => b-a).slice(0, k);
    let kPros = new Set();
    for(let rating of PMSarr) {
        addBestPros(rating, scores, kPros);
    };
    return Array.from((kPros));
};


console.log(bestPros(pros, 3));