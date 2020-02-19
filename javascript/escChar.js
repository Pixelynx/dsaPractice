const escapeCharacter = (str, escCount = 0) => {
    let result = "";
    let hashCount = 0;
    let bangB4Lett = false;
    let validChars = /^[A-Za-z!#]+$/;

    for (let i = 0; i < str.length; i++) {
        // IF THE RESULT HAS A LENGTH; I.E. CONTAINS A HASH
        if (result.length) {
            // IF THE CURRENT STR IDX IS A HASH
            // ADD STR[I] TO RESULT; INCREMENT HASH COUNT
            if (str[i] === '#') {
                result += str[i]; hashCount++;
                // console.log('IF RESULT LENGTH && #:');
                // console.log('RESULT: ', result);
                // console.log('HASH COUNT: ', hashCount);
                // console.log('BANG B4 LETTER: ', bangB4Lett);
                // console.log('_________');
            }
            // IF STR AT CURR IDX IS BAND AND NEXT CHAR IS LETTER
            if (str[i] === '!' && str[i + 1].match(validChars)) {
                bangB4Lett = true;
            }
            result += str[i]
        } else {
            // IF NO RESULT LENGTH AND CURR STR IDX IS HASH
            if (str[i] === '#') {
                result += str[i]; hashCount++;
            }

        }

        // IF HASHES HAVE CLOSED BUT NO BANGB4LETT SEEN; RESET
        if (hashCount === 2 && bangB4Lett === false) {
            result = ""; hashCount = 0;
        } else {
            // IF HASHES HAVE CLOSED BUT AND BANGB4LETT SEEN; ADD TO ESC CHAR COUNT AND RESET
            if (hashCount === 2 && bangB4Lett === true) {
                escCount++; result = ""; hashCount = 0;
            }
        }
    }

    return escCount;
}

escapeCharacter("#ab!c#de!f");

// let validChars1 =  /^[A-Za-z!#]+$/;
// let result1 = '';
// let str1 = 'dkc!#jd';
// for(let i = 0; i < str1.length; i++) {
//   if(str1.match(validChars1)) {result1 += str1[i]}
// }
// console.log(result1)