const magazineDic = (magazine) => {
    let dic = {};
    for(let letter of magazine) {
        !dic[letter] ? dic[letter] = 1 : dic[letter]++;
    }
    return dic;
};

const canConstruct = function(ransomNote, magazine) {
    let dictionary = magazineDic(magazine);
    
    while(ransomNote.length) {
        let ransomLetter = ransomNote[0];
        if(dictionary[ransomLetter]) {
            dictionary[ransomLetter] = dictionary[ransomLetter]-1; ransomNote = ransomNote.slice(1);
        } else return false;
    }
    return true;
};

let note = "bgz";
let mag = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
// let note = "aa";
// let mag = "aab";
console.log(canConstruct(note, mag));

// FIRST ATTEMPT
// let canConstruct = function(ransomNote, magazine) {
//     ransomNote = ransomNote.split("").sort().join("");
//     magazine = magazine.split("").sort().join("");
//     if(!ransomNote.length) return true;
//     if(!magazine.length) return false;
//     if(ransomNote.slice(0,1) != magazine.slice(0,1)) {
//         return canConstruct(ransomNote, magazine.slice(1));
//     } else return canConstruct(ransomNote.slice(1), magazine.slice(1))
// };