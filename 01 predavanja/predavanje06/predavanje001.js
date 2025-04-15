function curry(fn, arity = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            var args = [...prevArgs, nextArg];

            if (args.length >= arity) {
                console.log('prevArgs na kraju:', prevArgs);
                console.log('nextArg na kraju:', nextArg);
                console.log('args na kraju:', args);
                return fn(...args);
            }
            else {
                console.log('prevArgs na kraju:', prevArgs);
                console.log('nextArg na kraju:', nextArg);
                console.log('args na kraju:', args);
                return nextCurried(args);
            }
        };
    })([]);
}

function foo(x, y, z) {
    let result = 256 * x + 48 * y + 23 * z;
    return result;
}

console.log(curry(foo)(1));
console.log(curry(foo)(1)(2));
console.log(curry(foo)(1)(2)(3));
