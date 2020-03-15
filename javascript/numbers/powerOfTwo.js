const isPowerOfTwo = (n) => {
    if(n === 0) return false;
    if(n === 1) return true;
    if(n%2 === 0) {
        return isPowerOfTwo(Math.floor(n/2))
    }
    return false;
};

console.log(isPowerOfTwo(3));
// 16 / 2 = 8
// 8 / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1
