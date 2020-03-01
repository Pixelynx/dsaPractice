const findLowestNext = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if(arr[i+1] !== arr[i]+1) {
            return arr[i]+1
        }
    };
};

let arr = [1, 2];

console.log(findLowestNext(arr))