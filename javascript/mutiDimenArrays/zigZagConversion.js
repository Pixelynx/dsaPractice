// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

let str = "PAYPALISHIRING";

// placing each char str in the matrix starting from [0,0]; for as long as the row is less than numRows, insert chars down the rows
    // else insert char up one +1 row and +1 one col until back at row 0

const convertToMtx = (s, numRows) => {
    s = s.split("")
    // let mtx = [];
    let row = 0, col = 0;
    let mtx = new Array();
    
    while(s.length) {
        if(!mtx.length) mtx.push(new Array(s.shift())), row++;
        else {
            if(mtx.length < numRows) {
                mtx.push(new Array(s.shift())), row++;
            } else {
                if(row < numRows) mtx[row][col] = s.shift(), row++;
                else {
                        console.log(row)
                        row--; col++;
                        mtx[row][col] = s.shift();
                }
            } 
        }
    }
    
    return mtx;
}

console.log(convertToMtx(str, 3))