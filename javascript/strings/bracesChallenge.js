// Basic matching braces logic

// const isMatchingBrace = (str) => {
//     let stack = [];
//     let braces = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(' || str[i] === '[' || str[i] === '{') stack.push(str[i])
//         else {
//             let last = stack.pop();
//             if (str[i] !== braces[last]) return false;
//         }
//     }
//     if (stack.length !== 0) return false;

//     return true;
// }

// console.log(isMatchingBrace(['()()']))

// multiple strings in an arr
const isMatchingBrace = (arr) => {
    let result = [];
    let braces = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let basicBxtchStack = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '(' || str[j] === '[' || str[j] === '{') basicBxtchStack.push(str[j]);
            else {
                let last = basicBxtchStack.pop();
                result.push(braces[j] !== braces[last] ? 'NO' : 'YES')
            }
        }
    }
    return result;
}

let arr1 = ['((})', '()[]{}', '((})', '({[[]]})'];

console.log(isMatchingBrace(arr1))
