function minimumSwaps(arr) {
    let currEl, nextElUp, temp, swapEl;
    let count = 0;
    let sorted = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            currEl = i; nextElUp = i + 1;

            while (!sorted) {
                sorted = true;
                if (arr[nextElUp + 1] > arr[nextElUp]) {
                    sorted = false;
                    temp = nextElUp; nextElUp = nextElUp + 1;
                } else {
                    swapEl = nextElUp + 1;
                    holdEl = arr[i]
                    arr[i] = arr[swapEl];
                    arr[swapEl] = holdEl;
                    count++
                }
            }
        }
    }
    return count;
}

let arr = [7, 1, 3, 2, 4, 5, 6];
minimumSwaps(arr)