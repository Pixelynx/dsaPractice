function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i + 1] < A[i])
            return false;
    }
    if (A[0] != 1 || A[n - 1] != K)
        return false;
    else
        return true;
}

console.log(solution([1, 1, 3], 2))