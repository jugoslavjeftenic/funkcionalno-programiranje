const fibonacci = (function () {
    const memo = {};
    const slice = Array.prototype.slice;
    function f(x, n) {
        const args = slice.call(arguments);
        let value;
        if (args in memo) {
            value = memo[args];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(x, n - 1) + f(x, n - 2);
            memo[arguments] = value;
        }
        return value;
    }
    return f;
})();

let argumenti = ['x', 'y', 'z'];
console.log(fibonacci(argumenti, 12));
