function fibonaci(n, memo = {}) {
    if (n <= 2) return 1;
    if (n in memo) return memo[n];

    let result = fibonaci(n - 1, memo) + fibonaci(n - 2, memo);
    memo[n] = result;

    return result;
}

const startTime = new Date();
console.log(startTime);

console.log(fibonaci(50));

const endTime = new Date();
console.log(endTime);

const timeDifference = endTime.getTime() - startTime.getTime();
console.log(timeDifference);
