// Basic matching braces logic

const isMatchingBrace = (str) => {
    let basicBxtchStack = [];
    let braces = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') basicBxtchStack.push(str[i])
        else {
            let last = basicBxtchStack.pop();
            if (str[i] !== braces[last]) return false;
        }
    }
    if (basicBxtchStack.length !== 0) return false;

    return true;
}

console.log(isMatchingBrace(['()()']))