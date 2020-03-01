const findPrime = (num) => {
    let primes = new Set();

    for(let i = 2; i < num; i++) {
        let currentVal = num;
// console.log(currentVal)
        while(currentVal !== 2 && (currentVal%2===0 || currentVal%1===0)) {
            if((currentVal/i)%1===0) {
                currentVal = currentVal/i;
            } else {
                if((currentVal/2)%1===0) {
                    currentVal = currentVal/2;
                }
                else break;
            }
        };
        if(!primes.has(currentVal) && currentVal!==num) primes.add(currentVal);
    }
    return primes;
};

console.log(findPrime(12))