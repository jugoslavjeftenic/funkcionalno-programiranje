function myFindIndex(array, predicate) {
    for (index in array) {
        if (predicate(array[index])) {
            return index;
        }
    }
    return -1;
}

const nizBrojeva = [5, 8, -3, -90, 3];
console.log(nizBrojeva.findIndex((n) => n < 0));
console.log(myFindIndex(nizBrojeva, (n) => n < 0));
