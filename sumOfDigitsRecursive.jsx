// Write a function with the following prototype that returns the sum of the digits of an integer.
// int sumOfDigits(int x);
// If x is 234, the function should return 2 + 3 + 4, that is, 9.
// If x is 12, the function should return 1 + 2, which is 3.
// If x is 39, the function should return 12.
// If x is negative, ignore the minus sign. For example, -12 and 12 both return 3.
// Use recursion.

const sumOfDigits = (n) => {
    
    if(!n) return 0
    let remainder = n % 10
    n = Math.floor(n/10)

    return remainder + sumOfDigits(n)
}

console.log(sumOfDigits(234))