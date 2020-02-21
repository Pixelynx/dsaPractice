// const isAnagram = (str1, str2) => {
//     let lets = {};

//     if (str1.length !== str2.length) return false

//     for (let letter of str1) {
//         if (lets[letter]) lets[letter]++;
//         else lets[letter] = 1;
//     }

//     // for(let i = 0; i < str1.length; i++) {
//     //     let strChar = str1[i];
//     //     if(!lets[strChar]) lets[strChar] = 1
//     //     else {
//     //         lets[strChar] = lets[strChar]++
//     //     }
//     // }

//     // for(let i = 0; i < str2.length; i++) {
//     //     let strChar = str2[i];
//     //     if(lets[strChar]) lets[strChar]--
//     //     else return false;
//     // } return true;
// };

// console.log(isAnagram("listen", "silent"))




const anagram = (str1, str2) => {
    // if(str1.length !== str2.length){
    //   return false
    // }
    let letters = {}
    // for(let i = 0; i < str1.length; i++){
    //   let keyedInLetters = letters[str1[i]] 
    //   if(!keyedInLetters){

    //     keyedInLetters = 1
    //   }
    //   else{
    //     keyedInLetters = keyedInLetters + 1
    //   }
    // }

    for (let letter of str1) {
        if (letters[letter]) {
            letters[letter]++
        }
        else {
            letters[letter] = letters[letter] + 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (letters[str2[i]]) {
            letters[str2[i]] = letters[str2[i]] - 1
        }
        else {
            return false
        }
    }
    return true

}
console.log(anagram("listen", "silent"))