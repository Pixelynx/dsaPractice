let pros = [[5, 4], [4, 3], [6, 5], [3, 5]];

const bestPros = (pros, k) => {
    // new array of all the distances
    let distanceArr = pros.reduce((distances, pro) => {
        distances.push(pro[0])
        return distances;
    }, []);

    let max_distance = Math.max(...distanceArr);
    
    return max_distance;
}

console.log(bestPros(pros, 2));