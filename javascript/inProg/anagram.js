const anagram = (str1, str2) => {
    if(str1.length !== str2.length){
      return false
    }
    let letters = {}

    for(let letter of str1) {
            letters[letter] = letters[letter]+1 || 1
        }
        
        for(let letter of str2) {
            if(letters[letter] && letters[letter] > 0) {
                letters[letter]--
                console.log("IF: ", letters)
        } else return false
    } 
    return true;
}
console.log(anagram("listens", "silentd"))