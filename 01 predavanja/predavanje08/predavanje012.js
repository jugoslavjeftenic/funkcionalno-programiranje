var isOdd = v => v % 2 == 1;

console.log([1, 2, 3, 4, 5].filter(isOdd));

console.log([1, 2, 3, 4, 5].reduce((list, v) => (isOdd(v) ? list.push(v) : undefined, list), []));
