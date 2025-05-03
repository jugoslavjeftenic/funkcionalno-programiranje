var flatten = (arr, depth = Infinity) =>
    arr.reduce(
        (list, v) =>
            list.concat(
                depth > 0 ? (depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v) : [v]
            )
        , []);

let flattened = [[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]];

console.log(flattened);
console.log(flatten(flattened, 0));
console.log(flatten(flattened, 1));
console.log(flatten(flattened, 2));
console.log(flatten(flattened, 3));
console.log(flatten(flattened, 4));
console.log(flatten(flattened, 5));
