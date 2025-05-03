var flatten = arr => arr.reduce((list, v) => list.concat(Array.isArray(v) ? flatten(v) : v), []);
let flattened = [[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]];

console.log(flattened);
console.log(flatten(flattened));
console.log(flattened.flat(Infinity));
console.log(flattened.reduce((acc, val) => acc.concat(val), []));
