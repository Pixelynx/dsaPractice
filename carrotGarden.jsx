let garden = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];


let carrotGarden = (mtx) => {
    let carrotsEaten = 0;
    let startingIdx = [];
    let squareEaten = false;
    let currentSquare = startingIdx;
    let mid = (!(mtx.length % 2)) ? Math.floor(mtx.length / 2) : Math.floor(mtx.length / 2) + 1;
    let row, col;

    let top = [mid - 1][mid]
    let bottom = [mid + 1][mid]
    let right = [mid][mid + 1]
    let left = [mid][mid - 1]


    for (let i = 0; i < mtx.length; i++) {
        console.log(top, bottom, left, right)
        if (top > bottom && top > right && top > left) {
            carrotsEaten += carrotsEaten + top
            startingIdx = [[mid - 1][mid]]

        }
        else if (bottom > top && bottom > right && bottom > left) {
            carrotsEaten += carrotsEaten + bottom
            startingIdx = [[mid + 1][mid]]

        }

        else if (right > top && right > bottom && right > left) {
            carrotsEaten += carrotsEaten + right
            startingIdx = [[mid][mid + 1]]

        }

        else if (left > top && left > bottom && left > right) {
            carrotsEaten += carrotsEaten + left
            startingIdx = [[mid][mid - 1]]

        }


        // }
        // top console.log(mtx[mid -1][mid])
        // bottom console.log(mtx[mid + 1][mid])
        // right console.log(mtx[mid][mid + 1])
        // left console.log(mtx[mid][mid - 1]) 
    }

    return carrotsEaten
}



console.log(carrotGarden(garden))