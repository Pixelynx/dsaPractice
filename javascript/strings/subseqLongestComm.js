let longestCommonSubsequence = function(s1, s2, i = 0, j = 0, res = {}) {
    let key = `${i} ${j}`
    if(res[key] !== undefined) return res[key]
    if(s1.length === i || s2.length === j) return res[key] = 0; 
    if(s1[i] === s2[j]) {
        return res[key] = 1 + longestCommonSubsequence(s1, s2, i + 1, j + 1, res)
    } else {
        return res[key] = Math.max(longestCommonSubsequence(s1, s2, i + 1, j, res), longestCommonSubsequence(s1, s2, i, j + 1, res))
    };
};