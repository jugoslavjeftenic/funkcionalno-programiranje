const fibonacci = (function () {
    const memo = {};
    function f(x, n) {
        let value;
        memo[x] = memo[x] || {};
        if (x in memo && n in memo[x]) {
            value = memo[x][n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(x, n - 1) + f(x, n - 2);
            memo[x][n] = value;
        }
        return value;
    }
    return f;
})();

let x = 12;
let y = 13;
let z = 14;
console.log('x=', x, fibonacci('x', x));
console.log('y=', y, fibonacci('y', y));
console.log('z=', z, fibonacci('z', z));
