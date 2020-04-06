let groupAnagrams = function(strs) {
    let wordBank = new Object();
    let anagramGroups = new Map();
    for(word of strs) {
        if(!wordBank[word]) wordBank[word] = word.split("").sort().join("");
    };
    for(word in wordBank) {
        if(!anagramGroups.has(wordBank[word])) {
            anagramGroups.set(wordBank[word], new Array(word))
        } else anagramGroups.get(wordBank[word]).push(word);
    };
    return Array.from(anagramGroups.values());
};

let wordBank = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("OUTPUT: ", groupAnagrams(wordBank));
console.log("EXPECTED OUTPUT: [[ate,eat,tea],[nat,tan],[bat]]");
