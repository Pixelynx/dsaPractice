const PMS = (max_distance, distance, rating) => (max_distance - distance) * rating;

function proSort(pros, max) {
 pros = [...pros]
  return pros.sort((a,b)=> {
    const [aDistance, aRating] = a;
    const [bDistance, bRating] = b;
    a = PMS(max, aDistance, aRating);
    b = PMS(max, bDistance, bRating);
     return b - a;
  });
};

function findMaxDistanceAndMap(pros) {
    let maxDistance = -Infinity;
    const distanceMap = new Map();
    for(let i = 0; i< pros.length; i++){
      const pro = pros[i];
      distanceMap.set(pro, i);
      const [distance] = pro;
      if(distance > maxDistance) maxDistance = distance;
    };
    console.log(distanceMap)
    return [maxDistance, distanceMap];
   };

function bestPros(pros, k) {
    k = k < 0 ? 0 : k;
  const [maxDistance, proMap] = findMaxDistanceAndMap(pros);
  const sortedPros = proSort(pros, maxDistance);
  const sliced = sortedPros.slice(0, k);
  return sliced.map(pro => {
      return proMap.get(pro)
  });
};


let lePros = [ [5,4], [4,3], [6,5], [3,5] ]
console.log(bestPros(lePros, 2)) // [ 3, 1 ]