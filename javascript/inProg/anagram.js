const anagram = (str1, str2) => {
    // if(str1.length !== str2.length){
    //   return false
    // }
    let letters = {}

    for (let letter of str1) {
        if (letters[letter]) {
            console.log("IF: ", letters)
            letters[letter]++
        }
        else {
            console.log("ELIF: ", letters)
            letters[letter]++
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