povecajZa10 = (n) => n + 10;
uduplaj = (n) => n * 2;
kvadriraj = (n) => n ** 2;

// function komponujFunkcije(n, fn1, fn2, fn3) {
//     return fn1(fn2(fn3(n)));
// }
// console.log(komponujFunkcije(8, kvadriraj, povecajZa10, uduplaj));

// function komponujFunkcije(fn1, fn2, fn3) {
//     return function (n) {
//         return fn1(fn2(fn3(n)));
//     };
// }
// console.log(komponujFunkcije(kvadriraj, povecajZa10, uduplaj)(8));
// let komponuj = komponujFunkcije(kvadriraj, povecajZa10, uduplaj);
// console.log(komponuj(8));

function komponujFunkcije(...fns) {
    return function (n) {
        let retVal = n;

        for (let i = fns.length - 1; i >= 0; i--) {
            retVal = fns[i](retVal);
        }

        return retVal;
    };
}
console.log(komponujFunkcije(kvadriraj, povecajZa10, uduplaj)(8));

function pipe(...fns) {
    return function (n) {
        let retVal = n;

        // let copyOfFns = [...fns];
        // while (copyOfFns.length > 0) {
        //     retVal = copyOfFns.shift()(retVal);
        // }
        for (let fn of fns) {
            retVal = fn(retVal);
        }

        return retVal;
    };
}
console.log(pipe(uduplaj, povecajZa10, kvadriraj)(8));
console.log(pipe(kvadriraj, povecajZa10, uduplaj)(8));
