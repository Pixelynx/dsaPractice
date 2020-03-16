let pros = [[5, 4], [4, 3], [6, 5], [3, 5]];
// => [4, 6, 0, 15]
// => [3, 1]

function calcMaxDistance(arr) {
    let distanceArr = arr.reduce((distances, pro) => {
        distances.push(pro[0])
        // return distances.sort((a, b) => a-b).slice(-1);
    }, new Array());
    console.log(distanceArr)
    return Math.max(distanceArr);
};

function hashProsPMS(pros, dist) {
    // equation => (max_distance - distance) * rating
    let map = new Map();
    for(let pro of pros) {
        let distance = pro[0], rating = pro[1];
        let PMS = (dist - distance) * rating;
        map.set(pro, PMS);
    };
    return map;
};

function mapProScores(arr) {
    let obj = new Object();
    for(let val in arr) {
        obj[val] = arr[val];
    }
    return obj;
};

function bestPros(pros, k) {
    // new array of all the distances
    let max_distance = calcMaxDistance(pros);
    let proMap = hashProsPMS(pros, max_distance);
    let PMSarr = new Array();
    let kPros = new Set();
    for(let pro of Array.from(proMap)) {
        PMSarr.push(...pro.slice(-1));
    };
    console.log(PMSarr)

    let proObj = mapProScores(PMSarr);

    for(let rating of PMSarr) {
        for(let idx in proObj) {
            if(!kPros.has(proObj[idx]) && proObj[idx] === rating) {
                kPros.add(parseInt(idx))
            };
        }
    };
    
    return Array.from(kPros);
};

console.log(bestPros(pros, 2));