let testStr = 'aabbbbccDDAA';

// print out as an array the length of the starting index and length of the longest substring
// aabbbbccDDAA => [2, 4]

// var for starting index
// var for current longest substring
// wrap result in array with starting index and current longest string


const longestSubStr = (str) => {
    let startIdx = -1;
    let strCount = 1;
    let currLongestSub = 1;

    if(!str.length) return -1;

    for(let i = 0; i < str.length; i++) {
        let currIdx = i - 1;

        if(str[i] === str[i + 1]){
            strCount++
        } else {
            if (strCount > currLongestSub) startIdx = currIdx; currLongestSub = strCount;
            strCount = 1;
        }

    }
    return[startIdx, currLongestSub]
}

console.log(longestSubStr(testStr));