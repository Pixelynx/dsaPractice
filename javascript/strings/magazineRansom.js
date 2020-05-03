let canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split("").sort().join("");
    magazine = magazine.split("").sort().join("");

    if(!ransomNote.length) return true;
    if(!magazine.length) return false;
    if(ransomNote.slice(0,1) != magazine.slice(0,1)) {
        return canConstruct(ransomNote, magazine.slice(1));
    } else return canConstruct(ransomNote.slice(1), magazine.slice(1))
};

let note = "bg";
let mag = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
console.log(canConstruct(note, mag));
