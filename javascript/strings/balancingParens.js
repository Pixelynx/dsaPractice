function getMin(s) {
    let stack = [];
    let count = 0;
    let braces = {
        '(': ')',
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i])
        else {
            let last = stack.pop();
            if (s[i] !== braces[last]) count++;
        }
    }

    return stack.length ? count + stack.length : count;
}

console.log(getMin('()))))))))))))))))))))))('));