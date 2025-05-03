const reduce = (array, fn, initialValue) => {
    let accumulator;

    if (initialValue != undefined) {
        accumulator = initialValue;
    }
    else {
        accumulator = array[0];
    }

    if (initialValue === undefined) {
        for (let i = 1; i < array.length; i++) {
            accumulator = fn(accumulator, array[i]);
        }
    }
    else {
        for (const value of array) {
            accumulator = fn(accumulator, value);
        }
    }

    return accumulator;
};

const sum = (a, b) => a + b;
console.log(reduce([1, 2, 3, 4], sum, 0)); // 10
console.log(reduce([1, 2, 3, 4], sum));    // 10
