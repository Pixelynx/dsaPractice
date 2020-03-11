// const anagram = (str1, str2) => {
//     if(str1.length !== str2.length){
//       return false
//     }
//     let letters = {}

//     for(let letter of str1) {
//             letters[letter] = letters[letter]+1 || 1
//         }
        
//         for(let letter of str2) {
//             if(letters[letter] && letters[letter] > 0) {
//                 letters[letter]--
//         } else return false
//     } 
//     return true;
// }

const anagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    if(!str1.length && !str2.length) return true;
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    if(str1.shift() === str2.shift()) {
        str1 = str1.join(""), str2 = str2.join("");
        return anagram(str1, str2);
    }
    return false;
}

console.log(anagram("listed", "silent"))