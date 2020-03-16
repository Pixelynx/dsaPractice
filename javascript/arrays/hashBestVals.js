let pros = [[3, 5], [4, 3], [6, 5], [3, 5]];
// => [15, 6, 0, 15]
// => [0, 3, 1]

function calcMaxDistance(arr) {
    return arr.reduce((distances, pro) => {
        distances.push(pro[0])
        return distances.sort((a, b) => a-b).slice(-1);
    }, new Array());
};

function hashProsPMS(pros, dist) {
    // equation => (max_distance - distance) * rating
    let map = new Map();
    for(pro of pros) {
        let distance = pro[0], rating = pro[1];
        let PMS = (dist - distance) * rating;
        map.set(pro, PMS);
    };
    return map;
};

// console.log(hashProsPMS)

function bestPros(pros, k) {
    // new array of all the distances
    let max_distance = calcMaxDistance(pros);
    let proMap = hashProsPMS(pros, max_distance);
    let PMSarr = new Array();
    for(val of Array.from(proMap)) {
        PMSarr.push(...val.slice(-1));
        // PMSarr.sort((a, b) => b-a)

    }
    return PMSarr;
};

console.log(bestPros(pros, 3));