let str = "bbbbb";

const longestUniqueSubString = (s) => {
    let count = 0;
    let greatestLength = 0;
    let seen = new Set();

    for(let i = 0; i < s.length; i++) {
        if(seen.has(s[i])) {
            count = 0;
            seen = new Set();
            console.log(seen, count)
        } else {
            if(!seen.has(s[i])) {
                seen.add(s[i]);
                count++;
                console.log(seen, count)
            }
            console.log(count)
            if(count > greatestLength) greatestLength = count;
            // if(s[i] === s[i+1]) count = 0;
        }
    }
    return greatestLength;
}

console.log(longestUniqueSubString(str))