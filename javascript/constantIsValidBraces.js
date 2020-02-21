const isValid = (s) => {
    let basicStack = [];
    let braces = {
        '{': '}', 
        '[': ']',
        '(': ')'
    }

    for (let el of s) {

        let top = basicStack[basicStack.length - 1]
        if (el === '(' || el === '[' || el === '{') {
            basicStack.push(el)
        } else {
            if (el === braces[top]) {
                basicStack.pop()
            } else {
                return false;
            }
        }
    }
    return basicStack.length < 1
};