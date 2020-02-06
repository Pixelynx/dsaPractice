// Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

// stringClean("yyzzza") → "yza"
// stringClean("abbbcdd") → "abcd"
// stringClean("Hello") → "Helo"

const removeDupsRecursive = (str) => {
    let currentLetter = str.slice(0, 1);
    if(!str.length) return "";
    str = str.slice(1, str.length);
    
    if(currentLetter !== str[0]) {
        return currentLetter += removeDupsRecursive(str)
    } else {
        return removeDupsRecursive(str);
    }

}

let str1 = "yyzzza";
let str2 = "abbbcdd";
let str3 = "Hello";
str1 = str1.slice(1, str1.length)

console.log(removeDupsRecursive(str1))
console.log(removeDupsRecursive(str2))
console.log(removeDupsRecursive(str3))