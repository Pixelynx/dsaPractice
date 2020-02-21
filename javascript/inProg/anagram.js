const isAnagram = (str1, str2) => {
    let lets = {};

    if(str1.length !== str2.length) return false 

    for(let i = 0; i < str1.length; i++) {
        let strChar = str1[i];
        if(!lets[strChar]) lets[strChar] = 1
        else {
            lets[strChar] = lets[strChar]++
        }
    }

    for(let i = 0; i < str2.length; i++) {
        let strChar = str2[i];
        if(lets[strChar]) lets[strChar]--
        else return false;
    } return true;
};

console.log(isAnagram("listens", "silent"))