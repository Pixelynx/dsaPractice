let numJewelsInStones = function(J, S) {
    let jewels = new Set(J.split(""));

    // split chars in stone string into array, filter through, if jewels Set has S array at stone, return the length of the new array
    return S.split("").filter(stone => jewels.has(stone)).length
};

let j = "aA", s = "aAAbbbb";
console.log(numJewelsInStones(j, s))