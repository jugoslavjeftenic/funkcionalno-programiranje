"use strict";

const identity = x => x;

function fib(n, cont = identity) {
    if (n <= 1) return cont(n);
    return fib(
        n - 2,
        n2 => fib(
            n - 1,
            n1 => cont(n2 + n1)
        )
    );
}

console.log(fib(10));
