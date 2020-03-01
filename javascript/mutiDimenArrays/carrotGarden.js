let garden = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];


let carrotGarden = (mtx) => {
  let mid = Math.floor(mtx.length/2)
  let rabbitStart = garden[mid][mid]
  let rabbitVisit = []
  let totalCarrots = rabbitStart

  let up = mtx[mid -1][mid]
  let down = mtx[mid + 1][mid]
  let right = mtx[mid][mid + 1]
  let left = mtx[mid][mid - 1]


  for(let i = 0; i < mtx.length; i++){
    if(up > down && up > right && up > left && !rabbitVisit.includes(up)){
      totalCarrots += totalCarrots + up
      rabbitStart = garden[mid - 1][mid]
      rabbitVisit.push(up)

    }
      else if(down > up && down > right && down > left && !rabbitVisit.includes(down)){
      totalCarrots += totalCarrots + down
      rabbitStart = garden[mid + 1][mid]
      rabbitVisit.push(down)

    }

      else if(right > up && right > down && right > left && !rabbitVisit.includes(right)){
      totalCarrots += totalCarrots + right
      rabbitStart = garden[mid][mid +1]
      rabbitVisit.push(right)

    }

      else if(left > up && left > down && left > right && !rabbitVisit.includes(left)){
      totalCarrots += totalCarrots + left
      rabbitStart = garden[mid][mid -1]
      rabbitVisit.push(left)

    }


    // }
    // up console.log(mtx[mid -1][mid])
    // down console.log(mtx[mid + 1][mid])
    // right console.log(mtx[mid][mid + 1])
    // left console.log(mtx[mid][mid - 1]) 
  }

  return totalCarrots
}



carrotGarden(garden)