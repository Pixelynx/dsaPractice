// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

const changePi = (str) => {
    if(!str.length) return "";
    let firstChar = str[0], secChar = str[1];

    if(firstChar+secChar === "pi") {
        let foundPi = "3.14";
        return foundPi += changePi(str.slice(2))
    } else {
        return firstChar += changePi(str.slice(1))
    }
}

console.log(changePi("xpix")) // "x3.14x"
console.log(changePi("piipi")) // "3.143.14"
console.log(changePi("pip")) // "3.14p"