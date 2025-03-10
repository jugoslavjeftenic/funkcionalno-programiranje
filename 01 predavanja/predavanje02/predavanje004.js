console.log(Math.max(3, 5, 1));

let arg = [3, 5, 1];
console.log(Math.max(...arg));

let arg1 = [1, -2, 3, 4];
let arg2 = [8, 3, -8, 1];
console.log(Math.max(...arg1, ...arg2));

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let devet = 9;
console.log(Math.max(1, ...arr1, ...arr2, devet));
