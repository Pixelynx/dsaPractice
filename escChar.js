const escapeCharacter = (str, escCount = 0) => {
    let result = "";
    let hashCount = 0;
    let bangB4Lett = false;
    let validChars = /^[A-Za-z!#]+$/;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') result += str[i]; hashCount++;
        console.log('IF # FOUND;', result, hashCount, bangB4Lett)
        console.log('_________')
        if (hashCount > 0) result += str[i];
        console.log('IF HASHCOUNT > 0;', result, hashCount, bangB4Lett)
        console.log('_________')
        if (str[i] === '!' && str[i + 1].match(validChars)) {
            bangB4Lett = true;
            console.log('IF ! AND LETTER AFTER;', result, hashCount, bangB4Lett)
            console.log('_________')
        } else {
            // BLEH
        }

        if (hashCount === 2 && bangB4Lett === false) hashCount = 0;
        if (hashCount === 2 && bangB4Lett === true) {
            escCount++; hashCount = 0; bangB4Lett = false; result = "";
        }
    }

    return escCount;
}

escapeCharacter("##ab!c#de!f");

// let validChars1 =  /^[A-Za-z!#]+$/;
// let result1 = '';
// let str1 = 'dkc!#jd';
// for(let i = 0; i < str1.length; i++) {
//   if(str1.match(validChars1)) {result1 += str1[i]}
// }
// console.log(result1)