// function to check if string is a palindrome 
// first for loop starting from 0th index
// for the length of the string
// second loop starting at 1st index; concat to var
// and pass through palindrome function to check if true
// if function returns true; add one to count

function substrCount(n, s) {
    let counter = n, consec = 1, midIndex;

    for (let i = 1; i < n; i++) {
        midIndex = Math.floor(s.length / 2);
        if (s[i] === s[i - 1]) {
            counter += consec;
            consec++;

            if (midIndex > 0) {

                if ((midIndex - consec) > 0 && s[midIndex - consec] === s[i]) {
                    counter++;
                } else {
                    consec = 1;

                    if (((i - 2) >= 0) && s[i - 2] === s[i]) {
                        counter++;
                        midIndex = i - 1;
                    } else {
                        midIndex = Math.floor(s.length / 2);
                    }
                    console.log('S[I]: ', s[i])
                    console.log('S[I-1]: ', s[i - 1])
                    console.log('INDEX: ', i)
                    console.log('INDEX-1: ', i - 1)
                    console.log('MIDINDEX: ', midIndex)
                    console.log('COUNTER: ', counter)
                    console.log('___')
                }
            }
            console.log('S[I]: ', s[i])
            console.log('S[I-1]: ', s[i - 1])
            console.log('INDEX: ', i)
            console.log('INDEX-1: ', i - 1)
            console.log('MIDINDEX: ', midIndex)
            console.log('COUNTER: ', counter)
            console.log('___')
        } else {
            if (s[i - 1] === s[i + 1]) {
                counter++
            }
        }
        console.log('S[I]: ', s[i])
        console.log('S[I-1]: ', s[i - 1])
        console.log('INDEX: ', i)
        console.log('INDEX-1: ', i - 1)
        console.log('MIDINDEX: ', midIndex)
        console.log('COUNTER: ', counter)
        console.log('___')
    }

    return counter;

}


substrCount(4, 'aaaa');