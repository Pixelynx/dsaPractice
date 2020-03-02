/**
 * Promlem:
 * A very hungry rabbit is placed in the center of a garden  represented by a rectangular N * x M 2D matrix. The values of the
 * matrix will represent numbers of carrots available to the rabbit in each square of the 
 * garden. if the garden does not have an exact center,
 * the rabbit should start in the square closest to the center with the highest carrot 
 * count. On a given turn, the rabbit will eat the carrots . available on the square that 
 * it is on, then move up, down, left or right, choosing the square . that has the most 
 * carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go 
 * to sleep. You may assume that the rabbit will never have to choose between two squares 
 * with the same number of carrots. Write a function which takes a garden matrix and 
 * returns the number of carrots the rabbit eats. You may assume the matrix is rectangular 
 * with at least 1 row and 1 column, and that it is populated with non-negative integers
 * 
 * 
 * Additional Assumptions:
 * 1) Input will be an array of array of numbers to make up grid. Ex: matrix[x][y] should 
 * yeild a spot
 * 2) Input array is allowed to be modified
 * 3) Every square must start having a carrot
 */

/**
 * Interface used to describe a square
 */
interface SqrInfo {
    val: number;
    x: number;
    y: number;
}

function runHungryRabbit(matrix: number[][], x: number = -1, y: number = -1, numCarrots = 0): number {

  /**
   * Checks if given x and y cords are on the board to prevent errors from trying to get undefined.
   */
  const isSqrInMatrix = (xCord: number, yCord: number)=> {

    // check first cord gives an array to access and that arr returns an Int
    return Array.isArray(matrix[xCord]) && Number.isInteger(matrix[xCord][yCord]); 

  }

  const consumeCarrot = ()=> {
    if (isSqrInMatrix(x,y)) {
      const carrotsOnSquare = matrix[x][y];
      numCarrots = numCarrots + carrotsOnSquare;
      matrix[x][y] = 0;
    }
  }

  const getSqrInfo = (adjX: number, adjY: number) => {
    // return value or 0 if not a valid sqr.
    const val = isSqrInMatrix(adjX, adjY) ? matrix[adjX][adjY] :  0;
    return {val, x:adjX, y:adjY};
  } 

  const getLeftSqrVal = () => getSqrInfo(x-1, y);

  const getRightSqrVal =() => getSqrInfo(x+1, y);

  const getTopSqrVal =() => getSqrInfo(x, y+1);

  const getBotSqrVal = () => getSqrInfo(x, y-1);

  const getMaxSqr = (possibleSqrs: SqrInfo[]) => {

    let nextSqr: SqrInfo | null = null;
    let maxFound = 0;

    // check adjacent sqrs for highest value
    for (const sqrInfo of possibleSqrs) {
      if(sqrInfo.val > maxFound) {
        nextSqr = sqrInfo;
        maxFound = sqrInfo.val; 
      }
    }

    // will return null if only 0 values found
    return nextSqr;
  }

  const getNextSqr = () => getMaxSqr([getTopSqrVal(), getRightSqrVal(), getBotSqrVal(), getLeftSqrVal(),]);

  const checkIfShouldSleep = (nextSqr: SqrInfo | null = null) => {
    // if nextSqr found keep going, recursivly
    if (nextSqr) {
      return runHungryRabbit(matrix, nextSqr.x, nextSqr.y, numCarrots);
    }
    // otherwise report number of carrots
    return numCarrots;
  }

  const getMidCords = () => {
    // always given valid rect matrix so no need to look beyond frist row and column.
    const xLength = matrix.length;
    const yLength = matrix[0].length;
    
    //assume there is a middle at first, both x and y are odd.
    // -1 cause arrays start at 0 and we need to check val>= 0
    let x1: number = Math.ceil(xLength/2) - 1;
    x1 = x1 >= 0 ? x1 : 0;
    let x2 = x1;

    let y1: number = Math.ceil(yLength/2) - 1;
    y1 = y1 >= 0 ? y1 : 0;
    let y2 = y1;

    // handle if even
    if (xLength % 2 === 0) {
        x2 = xLength/2;
        x2 = x2 >= 0 ? x2 : 0;
    } 

    if (yLength % 2 === 0) {
        y2 = yLength/2;
        y2 = y2 >= 0 ? y2 : 0;
    } 


    const maxSqr = getMaxSqr([getSqrInfo(x1, y1),getSqrInfo(x1, y2),getSqrInfo(x2, y1),getSqrInfo(x2, y2)]);
    x = maxSqr!.x;
    y = maxSqr!.y;
  }

  // if no x or y given vals will be at -1 . This is the start of process, not in recursive loop yet
  if (x < 0) {
    getMidCords();
    // uncomment next line to see starting node
    // console.log('x', x, 'y', y);
  }
  consumeCarrot();
  const nextSqr = getNextSqr();
  // uncomment next line to see how code travels through the matrix
  // console.log(getNextSqr);
  return checkIfShouldSleep(nextSqr);
}







// EXAMPLES OF RUNNING CODE
const testMatrix1 = [[1], [2], [3]]; // should produce 5 if started at mid of  0,1 (2)
console.log(runHungryRabbit(testMatrix1), ':matrix 1 answer');

/**
 *  1   2   3
 *  4   5   6
 *  7   8   9
 *  10  11  12
 *  13  14  15
 */
const testMatrix2 = [[1,4,7,10,13], [2,5,8,11,14], [3,6,9,12,15]]; // 114 if started at mid of 1,2 (8)
console.log(runHungryRabbit(testMatrix2),':matrix 2 answer');

/**
 *  1   3   2
 *  4   20   100
 *  7   9   8
 *  10  12  11
 *  13  15  14
 */
const testMatrix3 = [[1,4,7,10,13], [3,20,9,12,15],[2,100,8,11,14]]; // 212 if started at mid of 1,2 (9)
console.log(runHungryRabbit(testMatrix3), ':matrix 3 answer');


const testMatrix4 = [[2]]; // should produce 2 if started at mid of  0,0 (2)
console.log(runHungryRabbit(testMatrix4),':matrix 4 answer');

/**
 *  1   4
 *  2   5
 *  3   6
 *  4   7
 */
const testMatrix5 = [[1,2,3,4], [4,5,6,7]]; // should produce 32 if started at mid of  1,2 (6)
console.log(runHungryRabbit(testMatrix5),':matrix 5 answer');