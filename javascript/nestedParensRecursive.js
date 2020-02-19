// Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.

// const nestedParens = (str) => {
//     if(!str.length) return true;
//     let startChar = str.slice(0, 1);
//     let lastChar = str.slice(str.length-1, str.length);
//     str = str.slice(1, str.length-1);

//     if(startChar === "(" && lastChar === ")") {
//         return nestedParens(str);
//     } else return false;
// }

console.log(nestedParens("(())")) // true
console.log(nestedParens("((()))")) // true
console.log(nestedParens("(((x))")) // false

const nestParen = par => {
    if(!par) return true;
    let endex = par.length - 1;
    if(par[0] + par[endex] === '()') return nestParen(par.slice(1,-1))
    else return false;
  }