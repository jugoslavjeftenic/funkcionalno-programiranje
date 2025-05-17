function fibonacci(n) {
    if (n === 0 || n === 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonaccimemo = (function () {
    const memo = {};

    function f(n) {
        let value;
        if (n in memo) {
            value = memo[n];
        }
        else {
            if (n === 0 || n === 1) {
                value = n;
            }
            else {
                value = f(n - 1) + f(n - 2);
            }
            memo[n] = value;
        }
        return value;
    }
    return f;
})();

const n = 30;

// bez memoizacije
let startTimenomemo = Date.now();
console.log('Startno vreme ', startTimenomemo);
let fibResnomemo = fibonacci(n);
let endTimenomemo = Date.now();
console.log('Vreme završetka ', endTimenomemo);
let durationnomemo = endTimenomemo - startTimenomemo;
console.log('Za n = ', n, 'Fibonacci bez memoizacije = ', fibResnomemo);
console.log('Trajanje (milisekundi) = ', durationnomemo);

// sa memoizacijom
let startTimememo = Date.now();
console.log('Startno vreme ', startTimememo);
let fibResmemo = fibonaccimemo(n);
let endTimememo = Date.now();
console.log('Vreme završetka ', endTimememo);
let durationmemo = endTimememo - startTimememo;
console.log('Za n = ', n, 'Fibonacci sa memoizacijom = ', fibResmemo);
console.log('Trajanje (milisekundi) = ', durationmemo);
