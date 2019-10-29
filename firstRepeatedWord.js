const firstRepeatedWord = (str) => {
    str = str.replace(/[^a-zA-Z ]/g, "").split(" ");
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) obj[str[i]] = 1;
        else obj[str[i]]++

        if (obj[str[i]] === 2) return str[i];
    }
}
let str = "He had quite enough of of this nonsense.";
console.log(firstRepeatedWord(str));