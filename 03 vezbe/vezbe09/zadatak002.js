function myMap(array, callback) {
    let retVal = [];
    for (let i = 0; i < array.length; i++) {
        retVal.push(callback(array[i]));
    }
    return retVal;
}

let niz = [5, 8, 3, 90, 3];
let dodaj100 = (n) => n + 100;

console.log(niz);
console.log(myMap(niz, dodaj100));
