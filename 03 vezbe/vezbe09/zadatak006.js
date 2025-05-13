function mySome(array, predicate) {
    for (value of array) {
        if (predicate(value)) {
            return true;
        }
    }
    return false;
}

let niz = [5, 8, -3, 90, 3];
console.log(niz.some((val) => val < 0));
console.log(mySome(niz, (val) => val < 0));
