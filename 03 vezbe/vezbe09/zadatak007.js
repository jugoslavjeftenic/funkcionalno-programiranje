function myEvery(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) {
            return false;
        }
    }
    return true;
}

const nizBrojeva = [5, 8, -3, 90, 3];
console.log(nizBrojeva.every((val) => typeof val === "string"));
console.log(myEvery(nizBrojeva, (val) => typeof val === "string"));

const nizParnihBrojeva = [4, 8, 14, 90, 18];
console.log(nizParnihBrojeva.every((val) => val % 2 === 0));
console.log(myEvery(nizParnihBrojeva, (val) => val % 2 === 0));

const nizStringova = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(nizStringova.every((val) => typeof val === "string"));
console.log(myEvery(nizStringova, (val) => typeof val === "string"));

const nizRaznihTipova = ["apple", 1, "cherry", "date", "elderberry"];
console.log(nizRaznihTipova.every((val) => typeof val === "string"));
console.log(myEvery(nizRaznihTipova, (val) => typeof val === "string"));
