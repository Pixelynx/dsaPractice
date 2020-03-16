let pros = [[5, 4], [4, 3], [6, 5], [3, 5]];
// => [15, 6, 0, 15]
// => [0, 3, 1]

function bestPros(pros, k) {
// new array of all the distances
let distanceArr = pros.reduce((distances, pro) => {
    distances.push(pro[0])
    return distances;
}, []);

let max_distance = Math.max(...distanceArr);
let scores = {};
let kPros = new Set();

// equation => (max_distance - distance) * rating
for(let pro = 0; pro < pros.length; pro++) {
    let distance = 0, rating = 1;
    let PMS = (max_distance - pros[pro][distance]) * pros[pro][rating];
    (scores[pro]) = PMS
}

let PMSarr = Object.values(scores).sort((a,b) => b-a).slice(0, k);

for(let rating of PMSarr) {
    for(let idx in scores) {
        if(!kPros.has(scores[idx]) && scores[idx] === rating) {
            kPros.add(parseInt(idx))
        }
    }
}
return Array.from(kPros);
};


console.log(bestPros(pros, 2));