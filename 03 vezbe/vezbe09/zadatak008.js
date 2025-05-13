function myFind(array, predicate) {
    for (value of array) {
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}

const nizBrojeva = [5, 8, -3, -90, 3];
console.log(nizBrojeva.find((n) => n < 0));
console.log(myFind(nizBrojeva, (n) => n < 0));
