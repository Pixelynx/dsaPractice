// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

const changeXY = (str) => {
    let currentLetter = str.slice(0, 1);
    str = str.slice(1, str.length);

    if (!str.length) return "";
    if (currentLetter === "x") {
        currentLetter = "y";
        return currentLetter += changeXY(str);
    } else {
        return currentLetter += changeXY(str)
    }
}
let str = "codex";
// console.log(str.slice(str.length-1, str.length))
// console.log(str.slice(0, str.length-1))

console.log(changeXY("codex"))// "codey"
console.log(changeXY("xxhixx")) // "yyhiyy"
console.log(changeXY("xhixhix")) // "yhiyhiy"