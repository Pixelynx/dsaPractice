function getMinimumUniqueSum(arr) {
    arr = arr.sort((a, b) => a - b)
    let seen = new Set()

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === arr[i + 1] && !seen.has(arr[i + 1])) {
            arr[i + 1] = arr[i + 1] + 1
            arr[i + 1]++
            seen.add(arr[i])
        } else {
            while (seen.has(arr[i + 1])) {
                arr[i + 1]++
            }
        }
        seen.add(arr[i + 1])
    }
    return arr.reduce((acc, el) => {
        return acc + el;
    })

}

let arr = [1, 2, 2, 5, 5, 6, 6, 7, 10, 14, 14, 15, 17, 17, 18, 6, 3]
getMinimumUniqueSum(arr)