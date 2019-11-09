function minimumSwaps(arr) {
    let currEl, nextElUp, temp, swapEl;
    let count = 0;
    let sorted = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            currEl = i; nextElUp = i + 1;
            console.log('CURRENT EL: ', currEl, '=>', arr[currEl]);
            console.log('NEXT EL: ', nextElUp, '=>', arr[nextElUp]);
            console.log('___');

            while (!sorted) {
                sorted = true;
                if (arr[nextElUp + 1] > arr[nextElUp]) {
                    sorted = false;
                    temp = nextElUp; nextElUp = nextElUp + 1;
                    console.log('SET TEMP: ', temp, '=>', arr[temp]);
                    console.log('REDEFINE: ', nextElUp, '=>', arr[nextElUp]);
                    console.log('___');
                } else {
                    swapEl = nextElUp + 1;
                    temp = arr[currEl]
                    console.log(arr[temp])
                    console.log('current: ', arr[currEl])
                    arr[i] = arr[swapEl];
                    arr[swapEl] = arr[temp];
                    count++
                    console.log('SWAP: ', swapEl, '=>', arr[swapEl]);
                    console.log('TEMP: ', swapEl, '=>', arr[swapEl]);
                    console.log('___')
                    console.log(sorted)
                }
                console.log(sorted)
            }


        }
        console.log('ARR: ', arr)
        console.log('___')
    }
    return count;
}

let arr = [7, 1, 3, 2, 4, 5, 6];
minimumSwaps(arr)