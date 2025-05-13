let niz = [3, 5, 9, 12, 15, 4, 8, 10, 7];

console.log(niz.reduce((acc, val) => (val % 2 !== 0 && val < 10) ? (acc + val) : acc, 0));
console.log(niz.filter((val) => val % 2 !== 0 && val < 10).reduce((acc, val) => acc + val, 0));

console.log(niz.reduce((acc, val) => (val % 3 === 0) ? acc * val : acc, 1));
console.log(niz.filter((val) => val % 3 === 0).reduce((acc, val) => acc * val, 1));

console.log(niz.reduce((acc, val) => (val % 2 === 0 && val > 5) ? acc + val * val : acc, 0));
console.log(niz.filter((val) => val % 2 === 0 && val > 5).map((val) => val * val).reduce((acc, val) => acc + val, 0));

console.log(niz.reduce((max, val) => val > max ? val : max, niz[0]) - niz.reduce((min, val) => val < min ? val : min, niz[0]));
let minimaks = niz.reduce((acc, val) => {
    return {
        min: val < acc.min ? val : acc.min,
        max: val > acc.max ? val : acc.max
    };
}, { min: niz[0], max: niz[0] });
console.log(minimaks.max - minimaks.min);
