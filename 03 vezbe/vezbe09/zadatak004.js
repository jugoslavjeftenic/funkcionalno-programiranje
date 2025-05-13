function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

let niz = [5, 8, 3, 90, 3];
let suma = (accu, n) => accu + n;

console.log(niz);
console.log(niz.reduce(suma, 0));
console.log(myReduce(niz, suma, 0));
