let testStr = 'belly full of jelly';
let obj = {};

for (let i = 0; i < testStr.length; i++) {
    if (obj[testStr[i]]) obj[testStr[i]]++
    else obj[testStr[i]] = 1
}