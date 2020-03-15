let pros = [[5, 4], [4, 3], [6, 5], [3, 5]];

const bestPros = (pros, k) => {
    // new array of all the distances
    let distanceArr = pros.reduce((distances, pro) => {
        distances.push(pro[0])
        return distances;
    }, []);

    let max_distance = Math.max(...distanceArr);
    let scores = {};    
    let kPros = new Array();
    
    for(let pro = 0; pro < pros.length; pro++) {
        let distance = 0, rating = 1;
        let PMS = (max_distance - pros[pro][distance]) * pros[pro][rating];
        scores[pro] = PMS
    }

    // for(idx in scores) {
        console.log(Object.values(scores))
    // }

    // equation => (max_distance - distance) * rating



    return scores;
}

console.log(bestPros(pros, 2));