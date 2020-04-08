// let groupAnagrams = function(strs) {
//     let wordBank = new Object();
//     let anagramGroups = new Map();
//     for(word of strs) {
//         if(!wordBank[word]) wordBank[word] = new Array(word.split("").sort().join(""));
//         else wordBank[word].push(word)
//     };
//     console.log(wordBank)
//     for(word in wordBank) {
//         wordBank[word] = wordBank[word].toString();
//         if(!anagramGroups.has(wordBank[word])) {
//             anagramGroups.set(wordBank[word], new Array(word))
//         } else anagramGroups.get(wordBank[word]).push(word);
//         console.log(anagramGroups)
//     };
//     return Array.from(anagramGroups.values());
// };

let groupAnagrams = function(strs) {
    let wordBank = new Object();
    for(word of strs) {
        if(!wordBank[word]) wordBank[word] = new Array(word.split("").sort().join(""));
        else wordBank[word].push(word)
    };
    console.log(wordBank)
};

let wordBank = ["eat", "tea", "tan", "ate", "nat", "bat"];
let forFuckSake = ["", ""]
console.log("OUTPUT: ", groupAnagrams(wordBank));
console.log("EXPECTED OUTPUT: [[ate,eat,tea],[nat,tan],[bat]]");
console.log("OUTPUT: ", groupAnagrams(forFuckSake));
console.log('EXPECTED OUTPUT: [["", ""]]');
