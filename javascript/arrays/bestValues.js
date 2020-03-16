let pros = [[5, 4], [4, 3], [6, 5], [3, 5]];
// => [0, 3]

const bestPros = (pros, k) => {
    // new array of all the distances
    let max_distance = pros.reduce((distances, pro) => {
        distances.push(pro[0])
        return distances.sort((a, b) => a-b).slice(-1);
    }, new Array());
    
    let scores = {};
    let kPros = new Set();
    
    // equation => (max_distance - distance) * rating
    for(let pro = 0; pro < pros.length; pro++) {
        let distance = 0, rating = 1;
        let PMS = (max_distance - pros[pro][distance]) * pros[pro][rating];
        (scores[pro]) = PMS
    }
    
    let PMSarr = Object.values(scores).sort((a,b) => b-a).slice(0, k);

    // for(let rating of PMSarr) {
    //     for(let idx in scores) {
    //         if(!kPros.has(scores[idx]) && scores[idx] === rating) {
    //             kPros.add(parseInt(idx))
    //         }
    //     }
    // }

    for(let rating of PMSarr) {
        let pRating = Object.values(scores).indexOf(rating);
        if(pRating && !kPros.has(pRating)) {
            kPros.add(parseInt(pRating))
        }
    }
    console.log(scores)
    console.log(PMSarr)
    return Array.from((kPros));
}

console.log(bestPros(pros, 2));