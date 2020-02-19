const swap = (num1, num2) => {
    let temp;
    if (num1 > num2) {
        temp = num1; num1 = num2; num2 = temp;
    }
    return [num1, num2]
}

const printSpacedInts = (arr) => {
    return arr.map(el => el)
}

const closestNumbers = (arr) => {
    let pairs = [];
    let minAbs = Number.POSITIVE_INFINITY;
    let hasSeen = new Set();
    // let hasSeen = {};

    for (let i = 0; i < arr.length; i++) {
        let tempPairs, holdNum;
        let currNum, currDiff;

        if (!hasSeen.has(arr[i])) hasSeen.add(arr[i]); currNum = arr[i];
        console.log('HAS SEE: ', hasSeen)

        for (let j = arr[i + 1]; j < arr.length - 1; j++) {

            // GETS CURRENT ABSOLUTE DIFFERENCE
            if (currNum !== arr[j]) {
                currNum > arr[j] ? currDiff = currNum - arr[j] : currDiff = arr[j] - currNum;
                holdNum = arr[j];
            }

            if (currDiff < minAbs) {
                minAbs = currDiff;
                pairs = [];
                tempPairs = swap(currNum, holdNum)
                // console.log('PAIRS: ', pairs)
                // console.log('TEMP PAIRS', tempPairs)
                // console.log('_______')
            } else
                if (currDiff === minAbs) {
                    tempPairs = swap(currNum, holdNum)
                }
            // console.log('PAIRS: ', pairs)
            // console.log('TEMP PAIRS', tempPairs)
            // console.log('_______')
            pairs.push(tempPairs)
        }
        console.log('PAIRS: ', pairs)
    }

    // return pairs

}

let testCase1 = [4, 4, 2, 1, 3];
// 1 2, 2 3, 3 4
console.log(closestNumbers(testCase1))

// let testSet = new Set();
// testSet.add(3)
// testSet.add(4)
// testSet.add(5)

// console.log(!testSet.has(8) ? 'Does not have number' : 'Has number')


let testPairs = [1 + ' ' + 2, 3 + ' ' + 4];
const returnPairs = (arr) => {
    for (let i = 0; i < pairs.length; i++) {
        console.log(pairs[i])
    }
}

// returnPairs(pairs)
// console.log(returnPairs(pairs))



  // for(let i = 0; i < arr.length; i++) {
  // let currNum, currDiff;

  //   if(!hasSeen.has(arr[i])) hasSeen.add(arr[i]); currNum = arr[i]; console.log('HAS SEEN', hasSeen)
  //   if(currNum !== arr[i + 1]) {
  //     console.log('CURR NUM & i + 1: ', currNum, arr[i + 1])
  //     currNum > arr[i + 1] ? currDiff = currNum - arr[i + 1] : currDiff = arr[i + 1] - currNum; console.log('CURR DIFF: ', currDiff)

  //   }
  //   if(currDiff < minAbs) {
  //       minAbs = currDiff;
  //       console.log('SET MIN ABS: ', minAbs)
  //       pairs = [];
  //       pairs.push(swap(currNum, arr[i + 1]))
  //       console.log('RESET PAIRS: ', pairs)
  //     } else
  //     if(currDiff === minAbs) pairs.push(swap(currNum, arr[i + 1])); console.log('PUSH PAIRS: ', pairs)
  //   // console.log('LOG PAIRS', pairs)
  // }
  // return pairs;