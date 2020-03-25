let log = console.log;
const intRange = (n1, n2) => {
    function checkNumContains5(n) {
        n = n.toString().split("");
        if(!n.length) return true;

        let currNum = n.slice(0, 1);
        if(parseFloat(currNum) === 5) return false;
        else {
            n = n.slice(1).join("");
            return checkNumContains5(n);
        };
    };

    for(let num = n1; num < n2; num++) {
        if(num !== 5 && checkNumContains5(num) === true) log(num);
    };
    
};

console.log(intRange(2, 56));