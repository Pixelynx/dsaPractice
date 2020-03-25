const intRange = (n1, n2) => {
    let count = 0;

    function checkNumContains5(n) {
        n = n.toString().split("");
        if (!n.length) return true;

        let currNum = n.slice(0, 1);
        if (parseFloat(currNum) === 5) return false;
        else return checkNumContains5(n.slice(1).join(""));
    };

    for (let num = n1; num < n2; num++) {
        if (num !== 5 && checkNumContains5(num) === true) count++;
    };

    return count;
};

console.log(intRange(2, 566));