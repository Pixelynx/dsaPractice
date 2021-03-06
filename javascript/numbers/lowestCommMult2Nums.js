// Examples

// lcm(9, 18) ➞ 18

// lcm(8, 5) ➞ 40

// lcm(17, 11) ➞ 187

// Notes
// Both values will be positive.
// The LCM is the smallest integer that divides both numbers such that the remainder is zero.

const lcm = (n1, n2) => {
    //Find the smallest and biggest number from both the numbers
    let large = Math.max(n1, n2);
    let small = Math.min(n1, n2);
    
    // Create copy of larger number
    // While currentMultiple % the smaller number does not equal 0, increase currentMultiple by the larger number
    // When currentMultiple % the smaller number equals 0, return the value of i
    let currentMultiple = large;
    while(currentMultiple % small !== 0){
        // console.log("LOG I: ", i)
        currentMultiple += large;
    }
    
    //return the number
    return currentMultiple;
  };

console.log(lcm(17, 11))