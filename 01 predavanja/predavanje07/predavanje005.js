const reduce = (reducer, initial, arr) => {
    let acc = initial;

    for (let i = 0, { length } = arr; i < length; i++) {
        acc = reducer(acc, arr[i]);
    }

    return acc;
};

const filter = (fn, arr) => reduce((acc, curr) => fn(curr) ? acc.concat([curr]) : acc, [], arr);
const izbacivac = reci => filter(rec => rec.length !== 4, reci);
const pocinjeSaS = reci => filter(rec => rec.startsWith('s'), reci);

console.log(izbacivac(["oops", "gasp", "shout", "sun"]));
console.log(pocinjeSaS(["oops", "gasp", "shout", "sun"]));
