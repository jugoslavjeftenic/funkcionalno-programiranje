function myFilter(array, predicate) {
    let retVal = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            retVal.push(array[i]);
        }
    }
    return retVal;
}


let niz = [5, 8, 3, 90, 3];
let jeVeceOd5 = (n) => n > 5;
let jeNeparni = (n) => n % 2 !== 0;

console.log(niz);
console.log(myFilter(niz, jeVeceOd5));
console.log(myFilter(niz, jeNeparni));
