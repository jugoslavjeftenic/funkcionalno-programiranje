const reduce = (reducer, initial, arr) => {
    let acc = initial;

    for (let i = 0, { length } = arr; i < length; i++) {
        acc = reducer(acc, arr[i]);
    }

    return acc;
};

console.log(reduce((acc, curr) => acc + curr, 0, [1, 2, 3]));
console.log(reduce((acc, curr) => acc - curr, 0, [1, 2, 3]));
