function fib_(n) {
    if (n === 1) return 1;
    return fib(n - 2);
}

function fib(n) {
    if (n === 0) return 0;
    return fib(n - 1) + fib_(n);
}

console.log(fib(10));
