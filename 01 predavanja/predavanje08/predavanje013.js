let inArr = [1, 4, 7, 1, 3, 1, 7, 9, 2, 6, 4, 0, 5, 3];
console.log(inArr);

var uniqueFilter = arr => arr.filter((v, idx) => arr.indexOf(v) == idx);
console.log(uniqueFilter(inArr));

var uniqeReducer = arr => arr.reduce((list, v) => list.indexOf(v) == -1 ? (list.push(v), list) : list, []);
console.log(uniqeReducer(inArr));
